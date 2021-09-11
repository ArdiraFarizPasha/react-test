import ImageUploading from "react-images-uploading";
import React, { useEffect, useState } from 'react'
import { Field, Formik, Form, useFormik } from "formik";
import { ButtonUploadCancelWrapper, ButtonUploadImage, FormFieldWrapper, InputField, RemoveImage, SubmitButton, UploadSectionWrapper } from "styled";
import axios from "axios";
import { GET_ALL_ITEMS, UPDATE_ITEM_DATA } from "utils/api";
import { useDispatch } from "react-redux";
import { setItemList, setOpenModalDetail } from "redux/slice";
import Swal from "sweetalert2";

export const RenderForm = (props) => {
  const [images, setImages] = React.useState([]);
  const maxNumber = 69;
  const onChange = (imageList, addUpdateIndex) => {
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };
  const { name, image_url, id, sellPrice, buyPrice, stock } = props.data.data;
  console.log(props, 'props')
  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues: {
      image_url: images.length > 0 ? images[0].data_url : image_url,
      name: name,
      sellPrice: sellPrice,
      buyPrice: buyPrice,
      stock: stock,
    },
    onSubmit: values => {
      if (images.length > 0) {
        const updatedValues = { ...values, image_url: images[0].data_url }
        handleUpdateData(updatedValues)
      } else {
        handleUpdateData(values)
      }
    },
  });

  const handleUpdateData = async (payload) => {
    try {
      const response = await axios.put(UPDATE_ITEM_DATA(id), payload)
      if (response.data) {
        Swal.fire(
          'Update success!',
          'Your file has been updated.',
          'success'
        )
        const response = await axios.get(GET_ALL_ITEMS)
        dispatch(setItemList(response.data))
      }
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
                {imageList.length > 0 ? imageList.map((image, index) => {
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
                })
                  :
                  <div className="image-item" style={{ display: 'flex', justifyContent: 'center' }}>
                    <img src={image_url} alt="" width="100" />
                  </div>
                }
                {errors && <div>Image size is too big</div>}
                <ButtonUploadCancelWrapper>
                  <ButtonUploadImage
                    style={isDragging ? { color: "red" } : null}
                    onClick={onImageUpload}
                    {...dragProps}
                  >
                    {imageList.length > 0 || formik.values.image_url ? 'Change Image' : 'Upload Image'}
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