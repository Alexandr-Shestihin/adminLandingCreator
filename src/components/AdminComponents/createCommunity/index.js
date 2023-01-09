import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { useIntl } from "react-intl";

import { API, API_ROUTER } from "../../../api/index";
import { ROUTER } from "../../../config";

import s from './createEvent.module.scss';

const СreateCommunity = () => {
   const { register, setValue, handleSubmit, resetField, watch, formState: { errors } } = useForm();
   const history = useHistory();
   const [contact, setContact] = useState([]);
   const [communityLogo, setCommunityLogo] = useState([]);
   const [organizerLogo, setOrganizerLogo] = useState([]);
   const [sponsorLogo, setSponsorLogo] = useState([]);
   const [partnerLogo, setPartnerLogo] = useState([]);
   const [photo, setPhoto] = useState([]);

   const uploadFile = async (img, id, name) => {
      const formData = new FormData();
      formData.append("media", img);
      formData.append("mediaType", name);
      formData.append("mediaOwnerId", id);
      return API.request(
          {
             ...API_ROUTER.media,
             headers: {
                "Content-type": "multipart/form-data",
             },
             data: formData,
          },
          true
      );
   }

   const uploadImages = (res) => {
      const communityBackgroundLogo = Object.values(watch('backgroundImage'));
      communityBackgroundLogo.forEach((el) => {
         uploadFile(el, res.id, 'communityBackgroundLogo');
      });


      communityLogo.forEach((el) => {
         uploadFile(el, res.id, 'communityLogo').then(() => {
         });
      });

      organizerLogo.forEach((el) => {
         uploadFile(el, res.id, 'communityOrganizerLogo');
      });

      photo.forEach((el) => {
         uploadFile(el, res.id, 'communityAnyPhotos');
      });

      sponsorLogo.forEach((el) => {
         uploadFile(el, res.id, 'communitySponsorLogo');
      });

      partnerLogo.forEach((el) => {
         uploadFile(el, res.id, 'communityPartnerLogo');
      });
   };


   const onSubmitForm = data => {
      let result;
      API.request({
         ...API_ROUTER.community.createCommunity,
         data: {
            games: [],
            name: watch('communityName'),
            nameOfOrganizer: watch('organizer'),
            contacts: watch('contact') || ['=='],
            admissionProcess: 'automatic',
            social_networks: {
               facebook: watch('facebook'),
               instagram: watch('instagram'),
               discord: watch('discord'),
               twitter: watch('twitter'),
            },
            type: '',
            description: watch('description'),
            countries: null,
            startedAt: new Date().toLocaleDateString() + "  00:00:00",
         }
      })
          .then((res) => {
             result = res;
          })
          .then(() => {
             uploadImages(result);
          })
          .then(() => goToUrl(ROUTER.communitysPage))
          .catch((err) => {
             console.log(err);
          });
   };

   //Мультиязычность Placeholder
   const сommunityNamePlaceholder = useIntl().formatMessage({
      id: "createCommunity.title.сommunityName.placeholder",
   });
   const descriptionPlaceholder = useIntl().formatMessage({
      id: "createCommunity.title.description.placeholder",
   });
   const organizerPlaceholder = useIntl().formatMessage({
      id: "createCommunity.title.organizer.placeholder",
   });
   const subscriptionPlaceholder = useIntl().formatMessage({
      id: "createCommunity.title.imgTitle.titleSubscription.placeholder",
   });
   const admissionPlaceholder = useIntl().formatMessage({
      id: "createCommunity.title.imgTitle.titleAdmission.placeholder",
   });
   const rulesPlaceholder = useIntl().formatMessage({
      id: "createTournament.title.rules.titleLayer",
   });
   const teamOrganizerNamePlaceholder = useIntl().formatMessage({
      id: "createCommunity.title.titleTeamOrganizer.placeholderName",
   });
   const contactsNameTitlePlaceholder = useIntl().formatMessage({
      id: "placeholderTitle",
   });
   const teamOrganizerTitlePlaceholder = useIntl().formatMessage({
      id: "createCommunity.title.titleTeamOrganizer.placeholderTitle",
   });
   const contactsNamePlaceholder = useIntl().formatMessage({
      id: "placeholderName",
   });
   const socialNetworksLinkPlaceholder = useIntl().formatMessage({
      id: "createCommunity.title.titleSocialNetworks.placeholder",
   });
   const titleContactsPlaceholder = useIntl().formatMessage({
      id: "createCommunity.title.titleContacts.placeholder",
   });
   const titleContactsSecondPlaceholder = useIntl().formatMessage({
      id: "createCommunity.title.titleContacts.second.placeholder",
   });
   const ServerAnswerSuccess = useIntl().formatMessage({
      id: "createCommunity.serverAnswer.success",
   });
   const ServerAnswerErr = useIntl().formatMessage({
      id: "createCommunity.serverAnswer.err",
   });

   const nestedKeys = [
      {
         key: 'name',
         placeholder: teamOrganizerNamePlaceholder
      },
      {
         key: 'title',
         placeholder: teamOrganizerTitlePlaceholder
      }
   ];


   const goToUrl = (url) => {
      history.push(url);
   };

   const handleFieldReset = (field) => {
      resetField(field);
   }

   const getSelectArrPhoto = (value, field) => {
      switch (field) {
         case 'communityLogo': {
            const newValue = [...communityLogo, ...Object.values(value)];
            setCommunityLogo(newValue);
            break;
         }
         case 'organizerLogo': {
            const newValue = [...organizerLogo, ...Object.values(value)];
            setOrganizerLogo(newValue);
            break;
         }
         case 'sponsorLogo': {
            const newValue = [...sponsorLogo, ...Object.values(value)];
            setSponsorLogo(newValue);
            break;
         }
         case 'partnerLogo': {
            const newValue = [...partnerLogo, ...Object.values(value)];
            setPartnerLogo(newValue);
            break;
         }

         case 'photo': {
            const newValue = [...photo, ...Object.values(value)];
            setPhoto(newValue);
            break;
         }
      }
   }
   const deleteImageArray = (field, index) => {
      switch (field) {
         case 'communityLogo': {
            const newValue = communityLogo.filter((el, i) => i !== index);
            setCommunityLogo(newValue);
            break;
         }
         case 'organizerLogo': {
            const newValue = organizerLogo.filter((el, i) => i !== index);
            setOrganizerLogo(newValue);
            break;
         }
         case 'sponsorLogo': {
            const newValue = sponsorLogo.filter((el, i) => i !== index);
            setSponsorLogo(newValue);
            break;
         }
         case 'partnerLogo': {
            const newValue = partnerLogo.filter((el, i) => i !== index);
            setPartnerLogo(newValue);
            break;
         }

         case 'photo': {
            const newValue = photo.filter((el, i) => i !== index);
            setPhoto(newValue);
            break;
         }
         default: break;
      }
   }


   return (
      <div className={s.mainBlock}>
         <form onSubmit={handleSubmit(onSubmitForm)}>
            <div className={s.titlePage}>
               <FormattedMessage id="createCommunity.pageName.title" tagName="span" />
            </div>
            <div className={s.mainSattingsContainer}>
               <div className={s.settingsContainer}>
                  <div className={s.inputContainer}>
                     <div className={s.titleInput}>
                        <FormattedMessage id="createCommunity.title.сommunityName" tagName="span" />
                     </div>
                     <input
                         className={errors.communityName ? s.inputErr : ""}
                         {...register("communityName", { required: true })}
                         type="text"
                         placeholder={сommunityNamePlaceholder}
                     />
                     {errors.communityName && <span className={s.errorLabel}>This field is required</span>}
                  </div>

                  <div className={s.imageContainer}>
                     <div className={s.label}>
                        <FormattedMessage id="createCommunity.title.BGImg" tagName="span" />
                     </div>
                     <div className={s.gridImage}>
                        {!watch('backgroundImage')?.length && (
                            <div className={`${s.inputFileContainer} ${errors.backgroundImage && s.error}`}>
                               <input
                                   type="file"
                                   accept="image/*"
                                   className={s.inputFile}
                                   {...register("backgroundImage", { required: true })}
                               />
                            </div>
                        )}

                        {watch('backgroundImage') && Object.values(watch('backgroundImage'))?.map((el, index) => (
                            <div className={s.imagePreview} key={`backgroundImage-${index}`}>
                               <div className={s.close} onClick={() => handleFieldReset('backgroundImage')} />
                               <img src={URL.createObjectURL(el)} alt='image' />
                            </div>
                        ))}
                     </div>
                     {errors.backgroundImage && <span className={s.errorLabel}>This field is required</span>}

                  </div>


                  <div className={s.label}>
                     <FormattedMessage id="createCommunity.title.description" tagName="span" />
                  </div>

                  <textarea
                      className={`${s.descriptionTextarea} ${errors.description && s.error}`}
                      {...register("description", { required: true })}
                      placeholder={descriptionPlaceholder}
                  ></textarea>

                  {errors.description && <span className={s.errorLabel}>This field is required</span>}


                  <div className={s.inputContainer}>
                     <div className={s.titleInput}>
                        <FormattedMessage id="createCommunity.title.organizer" tagName="span" />
                     </div>
                     <input
                         className={errors.communityName ? s.inputErr : ""}
                         {...register("organizer", { required: true })}
                         type="text"
                         placeholder={organizerPlaceholder}
                     />
                     {errors.organizer && <span className={s.errorLabel}>This field is required</span>}
                  </div>


                  <div className={s.imageContainer}>
                     <div className={s.label}>
                        <FormattedMessage id="createCommunity.title.imgTitle.communityLogo" tagName="span" />
                     </div>
                     <div className={s.gridImage}>
                        <div className={`${s.inputFileContainer} ${errors.communityLogo && s.error}`}>
                           <input
                               type="file"
                               accept="image/*"
                               className={s.inputFile}
                               multiple
                               {...register("communityLogo")}
                               onChange={(e) => getSelectArrPhoto(e.target.files, 'communityLogo')}
                           />
                        </div>

                        {communityLogo?.map((el, index) => (
                            <div className={s.imagePreview} key={`communityLogo-${index}`}>
                               <div className={s.close} onClick={() => deleteImageArray('communityLogo', index)} />
                               <img src={URL.createObjectURL(el)} alt='image' />
                            </div>
                        ))}
                     </div>
                     {errors.communityLogo && <span className={s.errorLabel}>This field is required</span>}

                  </div>


                  <div className={s.imageContainer}>
                     <div className={s.label}>
                        <FormattedMessage id="createCommunity.title.imgTitle.organizerLogo" tagName="span" />
                     </div>
                     <div className={s.gridImage}>
                        <div className={`${s.inputFileContainer} ${errors.organizerLogo && s.error}`}>
                           <input
                               type="file"
                               accept="image/*"
                               className={s.inputFile}
                               multiple
                               {...register("organizerLogo")}
                               onChange={(e) => getSelectArrPhoto(e.target.files, 'organizerLogo')}
                           />
                        </div>

                        {organizerLogo?.map((el, index) => (
                            <div className={s.imagePreview} key={`organizerLogo-${index}`}>
                               <div className={s.close} onClick={() => deleteImageArray('organizerLogo', index)} />
                               <img src={URL.createObjectURL(el)} alt='image' />
                            </div>
                        ))}
                     </div>
                     {errors.organizerLogo && <span className={s.errorLabel}>This field is required</span>}

                  </div>


                  <div className={s.imageContainer}>
                     <div className={s.label}>
                        <FormattedMessage id="createCommunity.title.imgTitle.sponsorLogo" tagName="span" />
                     </div>
                     <div className={s.gridImage}>
                        <div className={`${s.inputFileContainer} ${errors.sponsorLogo && s.error}`}>
                           <input
                               type="file"
                               accept="image/*"
                               className={s.inputFile}
                               multiple
                               {...register("sponsorLogo")}
                               onChange={(e) => getSelectArrPhoto(e.target.files, 'sponsorLogo')}
                           />
                        </div>

                        {sponsorLogo?.map((el, index) => (
                            <div className={s.imagePreview} key={`sponsorLogo-${index}`}>
                               <div className={s.close} onClick={() => deleteImageArray('sponsorLogo', index)} />
                               <img src={URL.createObjectURL(el)} alt='image' />
                            </div>
                        ))}
                     </div>
                     {errors.sponsorLogo && <span className={s.errorLabel}>This field is required</span>}

                  </div>

                  <div className={s.imageContainer}>
                     <div className={s.label}>
                        <FormattedMessage id="createCommunity.title.imgTitle.partnerLogo" tagName="span" />
                     </div>
                     <div className={s.gridImage}>
                        <div className={`${s.inputFileContainer} ${errors.partnerLogo && s.error}`}>
                           <input
                               type="file"
                               accept="image/*"
                               className={s.inputFile}
                               multiple
                               {...register("partnerLogo")}
                               onChange={(e) => getSelectArrPhoto(e.target.files, 'partnerLogo')}
                           />
                        </div>

                        {partnerLogo?.map((el, index) => (
                            <div className={s.imagePreview} key={`partnerLogo-${index}`}>
                               <div className={s.close} onClick={() => deleteImageArray('partnerLogo', index)} />
                               <img src={URL.createObjectURL(el)} alt='image' />
                            </div>
                        ))}
                     </div>
                     {errors.sponsorLogo && <span className={s.errorLabel}>This field is required</span>}

                  </div>
               </div>
            </div>


            <div className={s.contentHeaderTitleContainer}>
               <div className={s.btnContainer}>
                  <div className={s.text}>
                     <FormattedMessage id="createCommunity.title.titleCircuit" tagName="span" />
                  </div>
                  <a target="_blank" href="https://admin.passport.gg/contactus">
                     <button>Request  affiliation to circuit and grade</button>
                  </a>
               </div>

               <div className={s.btnContainer}>
                  <div className={s.text}>
                     <FormattedMessage id="createCommunity.title.titleRating" tagName="span" />
                  </div>
                  <a target="_blank" href="https://admin.passport.gg/contactus">
                     <button>
                        <FormattedMessage id="createCommunity.title.btnRequest" tagName="span" />
                     </button>
                  </a>
               </div>
            </div>


            <div className={s.label}>
               <FormattedMessage id="createTournament.title.rules" tagName="span" />
            </div>

            <textarea
                className={`${s.descriptionTextarea} ${errors.rules && s.error}`}
                {...register("rules")}
                placeholder={rulesPlaceholder}
            ></textarea>

            {errors.rules && <span className={s.errorLabel}>This field is required</span>}


            <div className={s.inputContainerLower}>


               <div className={`${s.inputText} ${s.disabledText}`}>
                  <FormattedMessage id="createCommunity.title.titleWelcome" tagName="span" />
                  <i className='iconLock' />
               </div>
            </div>
            <div className={s.inputContainer}>
               <div className={s.titleInput}>
                  <FormattedMessage id="createCommunity.title.titleTeamOrganizer" tagName="span" />
               </div>
               {nestedKeys.map((el, index) => (
                   <div className={s.inputWrapper} key={`teamOrganizerText-${index}`}>
                      <input
                          className={errors[`teamOrganizer.${el.key}`] ? s.inputErr : ""}
                          {...register(`teamOrganizer.${el.key}`)}
                          type="text"
                          placeholder={el.placeholder}
                      />
                      {errors[`teamOrganizer.${el.key}`] && <span className={s.errorLabel}>This field is required</span>}
                   </div>
               ))}

            </div>
            <div className={s.inputContainerLower}>
               <div className={s.inputText}>
                  <FormattedMessage id="createCommunity.title.titleContacts" tagName="span" />
               </div>
            </div>

            <div className={`${s.addBtnContainer} ${s.small}`}>
               <div
                   className={s.addImg}
                   onClick={() => setContact([...contact, ' '])}>
               </div>
            </div>

            {contact?.map((el, index) => (
                <div className={s.inputContainer} key={`contact-${index}`}>
                   <input
                       className={errors.contact ? s.inputErr : ""}
                       {...register(`contact.${index}`, { required: true})}
                       type="text"
                       placeholder={titleContactsPlaceholder}
                   />
                </div>
            ))}
            {errors.contact && <span className={s.errorLabel}>This field is required</span>}

            <div className={s.subtitle}>
               <FormattedMessage id="createCommunity.title.titleSocialNetworks" tagName="span" />
            </div>

            <div className={s.inputContainer}>
               <div className={s.label}>
                  <FormattedMessage id="createEvent.title.titleFacebook" tagName="span" />
               </div>
               <input
                   className={errors.facebook ? s.inputErr : ""}
                   {...register("facebook")}
                   type="text"
                   placeholder={socialNetworksLinkPlaceholder}
               />
               {errors.facebook && <span className={s.errorLabel}>This field is required</span>}
            </div>

            <div className={s.inputContainer}>
               <div className={s.label}>
                  <FormattedMessage id="createEvent.title.titleInstagram" tagName="span" />
               </div>
               <input
                   className={errors.instagram ? s.inputErr : ""}
                   {...register("instagram")}
                   type="text"
                   placeholder={socialNetworksLinkPlaceholder}
               />
               {errors.instagram && <span className={s.errorLabel}>This field is required</span>}
            </div>

            <div className={s.inputContainer}>
               <div className={s.label}>
                  <FormattedMessage id="createEvent.title.titleDiscord" tagName="span" />
               </div>
               <input
                   className={errors.discord ? s.inputErr : ""}
                   {...register("discord")}
                   type="text"
                   placeholder={socialNetworksLinkPlaceholder}
               />
               {errors.discord && <span className={s.errorLabel}>This field is required</span>}
            </div>

            <div className={s.inputContainer}>
               <div className={s.label}>
                  <FormattedMessage id="createEvent.title.titleTwitter" tagName="span" />
               </div>
               <input
                   className={errors.twitter ? s.inputErr : ""}
                   {...register("twitter")}
                   type="text"
                   placeholder={socialNetworksLinkPlaceholder}
               />
               {errors.twitter && <span className={s.errorLabel}>This field is required</span>}
            </div>


            <div className={s.imageContainer}>
               <div className={s.label}>
                  <FormattedMessage id="createCommunity.title.titlePhotos" tagName="span" />
               </div>
               <div className={s.gridImage}>
                  <div className={`${s.inputFileContainer} ${errors.photo && s.error}`}>
                     <input
                         type="file"
                         accept="image/*"
                         className={s.inputFile}
                         multiple
                         {...register("photo")}
                         onChange={(e) => getSelectArrPhoto(e.target.files, 'photo')}

                     />
                  </div>

                  {photo?.map((el, index) => (
                      <div className={s.imagePreview} key={`photo$-${index}`}>
                         <div className={s.close} onClick={() => deleteImageArray('photo', index)} />
                         <img src={URL.createObjectURL(el)} alt='image' />
                      </div>
                  ))}
               </div>
               {errors.communityLogo && <span className={s.errorLabel}>This field is required</span>}

            </div>


            <div className={s.contentHeaderTitleContainer}>
               <button type='submit' className={s.createBtn}>
                  <FormattedMessage id="createCommunity.pageName.title" tagName="span" />
               </button>
            </div>
         </form>
      </div>
   )
}
export default СreateCommunity;
