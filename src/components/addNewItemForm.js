import ImageUploading from "react-images-uploading";
import React, { useEffect, useState } from 'react'
import { Field, Formik, Form, useFormik } from "formik";
import { ButtonUploadCancelWrapper, ButtonUploadImage, FormFieldWrapper, InputField, RemoveImage, SubmitButton, UploadSectionWrapper } from "styled";
import axios from "axios";
import { ADD_NEW_ITEM, GET_ALL_ITEMS, UPDATE_ITEM_DATA } from "utils/api";
import { useDispatch, useSelector } from "react-redux";
import { handleAddNewItemToList, setItemList, setOpenModalAddNew } from "redux/slice";
import Swal from "sweetalert2";

export const AddNewItemForm = () => {
  const [images, setImages] = React.useState([]);
  const maxNumber = 69;
  const onChange = (imageList, addUpdateIndex) => {
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };
  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues: {
      image_url: '',
      name: '',
      sellPrice: '',
      buyPrice: '',
      stock: '',
    },
    onSubmit: values => {
      if (images.length > 0) {
        handleUpdateData({ ...values, image_url: 'https://cdn1.iconfinder.com/data/icons/logos-brands-in-colors/231/among-us-player-white-512.png' })
      }
    },
  });

  const handleUpdateData = async (payload) => {
    console.log(payload, '<<< payload')
    try {
      const response = await axios.post(ADD_NEW_ITEM, payload)
      if (response.data) {
        Swal.fire(
          'Create success!',
          'Your file has been created.',
          'success'
        )
        const response = await axios.get(GET_ALL_ITEMS)
        dispatch(setItemList(response.data))
        dispatch(setOpenModalAddNew(false))
      }
      // dispatch(handleAddNewItemToList(response.data))
    } catch (error) {
      alert(error)
    }
  }

  return (
    <div>
      <div className="row">
        <UploadSectionWrapper className="col-lg-6 col-md-6 col-sm-6">
          <ImageUploading
            value={images} // array of object , first index , data_url
            onChange={onChange}
            maxNumber={maxNumber}
            maxFileSize={100000}
            dataURLKey="data_url"
          >
            {({
              imageList,
              onImageUpload,
              onImageRemoveAll,
              onImageUpdate,
              onImageRemove,
              isDragging,
              dragProps,
              errors
            }) => (
              // write your building UI
              <div className="upload__image-wrapper">
                {imageList.length > 0 && imageList.map((image, index) => {
                  console.log(image, '<<< image')
                  return (
                    <div key={index} className="image-item" style={{ display: 'flex', justifyContent: 'center' }}>
                      <img src={image.data_url} alt="" width="100" />
                      {/* <div className="image-item__btn-wrapper">
                    <ButtonUploadImage onClick={() => onImageUpdate(index)}>
                      Update
                    </ButtonUploadImage>
                    <button onClick={() => onImageRemove(index)}>Remove</button>
                  </div> */}
                    </div>
                  )
                })}
                {errors && <div>Image size is too big</div>}
                <ButtonUploadCancelWrapper>
                  <ButtonUploadImage
                    style={isDragging ? { color: "red" } : null}
                    onClick={onImageUpload}
                    {...dragProps}
                  >
                    {imageList.length > 0 ? 'Change Image' : 'Upload Image'}
                  </ButtonUploadImage>
                  <RemoveImage onClick={onImageRemoveAll}>Remove</RemoveImage>
                </ButtonUploadCancelWrapper>
              </div>
            )}
          </ImageUploading>
        </UploadSectionWrapper>
        <div className="col-lg-6 col-md-6 col-sm-6">
          <div>
            <form onSubmit={formik.handleSubmit}>
              <FormFieldWrapper>
                <label htmlFor="name">Item Name</label>
                <div>
                  <InputField
                    id="name"
                    name="name"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                  />
                </div>
              </FormFieldWrapper>
              <FormFieldWrapper>
                <label htmlFor="buyPrice">Buy Price</label>
                <div>
                  <InputField
                    id="buyPrice"
                    name="buyPrice"
                    type="number"
                    onChange={formik.handleChange}
                    value={formik.values.buyPrice}
                  />
                </div>
              </FormFieldWrapper>
              <FormFieldWrapper>
                <label htmlFor="sellPrice">Sell Price</label>
                <div>
                  <InputField
                    id="sellPrice"
                    name="sellPrice"
                    type="number"
                    onChange={formik.handleChange}
                    value={formik.values.sellPrice}
                  />
                </div>
              </FormFieldWrapper>
              <FormFieldWrapper>
                <label htmlFor="stock">Stock</label>
                <div>
                  <InputField
                    id="stock"
                    name="stock"
                    type="number"
                    onChange={formik.handleChange}
                    value={formik.values.stock}
                  />
                </div>
              </FormFieldWrapper>
              <SubmitButton type="submit">Save changes</SubmitButton>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}