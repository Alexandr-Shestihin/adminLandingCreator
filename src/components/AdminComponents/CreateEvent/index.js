import React, { useState, useEffect } from 'react';

import { API, API_ROUTER } from "../../../api/index";
import { ROUTER } from "../../../config";
import { useHistory } from "react-router-dom";
import { convertDate } from '../../../comon/convertDate';
import { uploadData, onChangeDudlePhotos, addPhotos, delPhoto } from '../../../comon/uploadData';
import { useLocation } from "react-router-dom";

import s from './createEvent.module.scss';

import { FormattedMessage } from "react-intl";
import { useIntl } from "react-intl";

import Calendar from '../../../comon/Calendar/index';
import CustomSelect from '../../../comon/CustomSelect';
import FileUploaderSingle from '../../../comon/file-uploader-for-single';

const CreateEvent = (props) => {
   const { pathname } = useLocation();
   console.log(pathname)//выводит URL
   //Мультиязычность Placeholder
   const enterEventNamePlaceholder = useIntl().formatMessage({
      id: "createEvent.title.eventName.placeholder",
   });
   const descriptionPlaceholder = useIntl().formatMessage({
      id: "createEvent.title.description.placeholder",
   });
   const organizerPlaceholder = useIntl().formatMessage({
      id: "createEvent.title.organizer.placeholder",
   });
   const gamesPlaceholder = useIntl().formatMessage({
      id: "createEvent.title.titleGames.placeholder",
   });
   const typeEventPlaceholder = useIntl().formatMessage({
      id: "createEvent.title.titleTypeEvent.placeholder",
   });
   const communityPlaceholder = useIntl().formatMessage({
      id: "createEvent.title.titleCommunity.placeholder",
   });
   const layerPlaceholder = useIntl().formatMessage({
      id: "createEvent.title.titleLayer.placeholder",
   });
   const teamOrganizerNamePlaceholder = useIntl().formatMessage({
      id: "createEvent.title.titleTeamOrganizer.placeholderName",
   });
   const teamOrganizerTitlePlaceholder = useIntl().formatMessage({
      id: "createEvent.title.titleTeamOrganizer.placeholderTitle",
   });
   const contactsNamePlaceholder = useIntl().formatMessage({
      id: "placeholderName",
   });
   const contactsNameTitlePlaceholder = useIntl().formatMessage({
      id: "placeholderTitle",
   });
   const socialNetworksLinkPlaceholder = useIntl().formatMessage({
      id: "createEvent.title.titleSocialNetworks.placeholder",
   });
   const LocationPlaceholder = useIntl().formatMessage({
      id: "createEvent.title.titleLocation.placeholder",
   });
   const ServerAnswerSuccess = useIntl().formatMessage({
      id: "createEvent.serverAnswer.success",
   });
   const ServerAnswerErr = useIntl().formatMessage({
      id: "createEvent.serverAnswer.err",
   });

   useEffect(() => {

      let params = {
         ...API_ROUTER.community.getCommunities,
         pathKeys: {
            page: 1,
            limit: 9999,
         }
      };

      API.request(params)
         .then((res) => {
            setCommunitysBack(res.communities);
         })
         .catch((err) => console.log(err));
   }, [])

   useEffect(() => {
      API.request({
         ...API_ROUTER.user.getCurrentGames,
      })
         .then((res) => {
            setGamesFromBack(res);
         })
         .catch((err) => console.log(err))
   }, [])

   //dateStartCalendar
   const [dateStartIsVisible, setDateStartIsVisible] = useState(false);
   //dateEndCalendar
   const [dateEndIsVisible, setDateEndVisible] = useState(false);

   //dateStart
   const [calendarDateStart, setCalendarDateStart] = useState(props.convertDateISO8601(new Date()));
   console.log();

   const handleDateStartChange = e => setCalendarDateStart(props.convertDateISO8601(e));

   //dateEnd
   const [calendarDateEnd, setCalendarDateEnd] = useState(props.convertDateISO8601(new Date()));

   const handleDateEndChange = e => setCalendarDateEnd(props.convertDateISO8601(e));

   //eventName
   const [eventName, setEventName] = useState('');
   //eventDescription
   const [eventDescription, setEeventDescription] = useState('');

   const [communitysBack, setCommunitysBack] = useState([]);

   const [gamesBack, setGamesFromBack] = useState('');
   const [games, setGames] = useState([]);
   const [typeEvent, setTypeEvent] = useState('');
   console.log(typeEvent)
   console.log(typeof typeEvent)
   const [location, setLocation] = useState('');

   //organizer
   const [organizer, setOrganizer] = useState('');
   const [community, setCommunity] = useState('');

   //Contacts
   const [contacts, setContacts] = useState('');
   const [contact, setContact] = useState('');

   const [layer, setLayer] = useState('');

   //SOCIAL NETWORKS
   //facebook
   const [facebookLink, setFacebookLink] = useState('');
   //instagram
   const [instagramLink, setInstagramLink] = useState('');
   //discord
   const [discordLink, setDiscordLink] = useState('');
   //twitter
   const [twitterLink, setTwitterLink] = useState('');

   //Всё, что связанно с валидацией
   const [submitErr, setSubmitErr] = useState(false);
   const [facebookErr, setFacebookErr] = useState(false);
   const [instagramErr, setInstagramErr] = useState(false);
   const [discordErr, setDiscordErr] = useState(false);
   const [twitterErr, setTwitterErr] = useState(false);

   //images
   const [backgroundLogo, setBackgroundLogo] = useState([]);

   //add inputs Organizer
   const [inputArrOrganizer, setInputArrOrganizer] = useState([{ name: "", title: "" }]);
   //add inputs Contacts
   const [inputArrContacts, setInputArrContacts] = useState([{ name: "", title: "" }]);

   //add photo 
   const [photoArrEventlogo, setInputArrEventlogo] = useState(['1']);
   const [photoArrOrganizerlogo, setInputArrOrganizerlogo] = useState(['1']);
   const [photoArrSponsorlogo, setInputArrSponsorlogo] = useState(['1']);
   const [photoArrPartnerlogo, setInputArrPartnerlogo] = useState(['1']);
   const [photoAnyPhotos, setInputAnyPhotos] = useState(['1']);

   //change text value in input and textarea
   const changeTextValue = (value, fn) => {
      fn(value);
      value ? setSubmitErr(false) : setSubmitErr(true);
   }
   //change value in select
   const changeSelectValue = (value, fn) => {
      fn(value);
      value ? setSubmitErr(false) : setSubmitErr(true);
   }

   const chakedForm = (e) => {
      e.target.value ? setSubmitErr(false) : setSubmitErr(true);
   }
   const chakedSelct = (e) => {
      e ? setSubmitErr(false) : setSubmitErr(true);
   }
   const chakedSocialNetworks = (e, name, setErr) => {
      let str = e.target.value;
      str.includes(name) ? setErr(false) : setErr(true);
   }

   const addInputs = (value, fn) => {
      let newValue = [...value];
      newValue.push({ name: "", title: "" });
      fn(newValue);
   }

   const onChangeDudleInput = (e, id, type, fn, data) => {
      let value = e.target.value;
      let newValue = [...data];
      if (type === 'name') {
         newValue[id].name = value;
      } else {
         newValue[id].title = value;
      }
      fn(newValue);
   }

   const changeGames = (value) => {
      let newArr = [];
      for (let key in value) {
         let newObj = {}
         newObj.gameId = value[key];
         newArr.push(newObj);
      }
      setGames(newArr)
   }
   const history = useHistory();
   function goToUrl(url) {
      history.push(url);
   }

   const onSubmit = () => {
      if (eventName && calendarDateStart && eventDescription && organizer && community) {

         API.request({
            ...API_ROUTER.events.createEvent,
            data: {
               communityId: community,
               games: games, //array
               name: eventName,
               nameOfOrganizer: organizer,
               contacts: inputArrContacts,
               social_networks: {
                  facebook: facebookLink,
                  instagram: instagramLink,
                  discord: discordLink,
                  twitter: twitterLink,
               },
               type: typeEvent, //Type of the Event
               grade: layer,
               teamOfOrganizer: inputArrOrganizer,
               description: eventDescription,
               location: location,
               countries: null,
               startedAt: (calendarDateStart + "  00:00:00").replaceAll("/", "-"),
               endedAt: (calendarDateEnd + "  00:00:00").replaceAll("/", "-"),
            }
         })
            .then((res) => {
               console.log(res.id);
               //////////////////////////////////////////

               setTimeout(() => {
                  if (backgroundLogo.length > 0) {
                     uploadData(backgroundLogo, res.id, 'backgroundLogo')
                  }
               }, 0)

               //
               setTimeout(() => {
                  if (photoArrEventlogo != '1') {
                     photoArrEventlogo.map(el => uploadData(el, res.id, 'eventLogo'));
                  }
               }, 1000)

               setTimeout(() => {
                  if (photoArrSponsorlogo != '1') {
                     photoArrSponsorlogo.map(el => uploadData(el, res.id, 'sponsorLogo'));
                  }
               }, 2000)
               setTimeout(() => {
                  if (photoArrPartnerlogo != '1') {
                     photoArrPartnerlogo.map(el => uploadData(el, res.id, 'partnerLogo'));
                  }
               }, 3000)
               setTimeout(() => {
                  if (photoArrOrganizerlogo != '1') {
                     photoArrOrganizerlogo.map(el => uploadData(el, res.id, 'organizerLogo'));
                  }
               }, 4000)
               setTimeout(() => {
                  if (photoAnyPhotos != '1') {
                     photoAnyPhotos.map(el => uploadData(el, res.id, 'anyPhotos'));
                  }
               }, 5000)

               goToUrl(ROUTER.evensPage);
               alert(ServerAnswerSuccess);
            })
            .catch((err) => {
               console.log(err);
               //alert(ServerAnswerErr);
               for (let key in err.data.errors) {
                  alert(`${key}: ${err.data.errors[key]}`)
               }
            });

      } else setSubmitErr(true);

   }

   return (
      <div className={s.mainBlock}>
         <div className={s.contentHeaderTitleContainer}>

            <div className={s.eventsHeaderTitleContainer}>
               <div className={s.title}>
                  <FormattedMessage id="createEvent.pageName.title" tagName="span" />
               </div>
            </div>

            <div className={s.mainSattingsContainer}>
               <div className={s.settingsContainer}>
                  <div className={s.inputContainer}>
                     <div className={s.titleInput}>
                        <FormattedMessage id="createEvent.title.eventName" tagName="span" />
                     </div>
                     {submitErr ? <p className={s.messageErr}>
                        <FormattedMessage id="err.errMessage" tagName="span" />
                     </p> : false}
                     <input
                        className={submitErr ? s.inputErr : false}
                        type="text"
                        placeholder={enterEventNamePlaceholder}
                        value={eventName}
                        onChange={(e) => changeTextValue(e.target.value, setEventName)}
                        onBlur={chakedForm}
                     />
                  </div>
                  <div className={s.btnContainer}>
                     <div
                        className={s.btnInnerContainer}
                        onMouseEnter={() => setDateStartIsVisible(true)}
                        onMouseLeave={() => setDateStartIsVisible(false)}
                     >
                        <div className={s.titleBtn}>
                           <FormattedMessage id="createEvent.title.startTitle" tagName="span" />
                        </div>
                        <button className={s.filterBtn}>
                           {calendarDateStart}
                        </button>

                        {dateStartIsVisible ? <div className={s.calendarModal}>
                           <Calendar onChange={handleDateStartChange} />
                        </div> : false}
                     </div>
                     <div
                        className={s.btnInnerContainer}
                        onMouseEnter={() => setDateEndVisible(true)}
                        onMouseLeave={() => setDateEndVisible(false)}
                     >
                        <div className={s.titleBtn}>
                           <FormattedMessage id="createEvent.title.endTitle" tagName="span" />
                        </div>
                        <button className={s.filterBtn}>
                           {calendarDateEnd}
                        </button>

                        {dateEndIsVisible ? <div className={s.calendarModal}>
                           <Calendar onChange={handleDateEndChange} />
                        </div> : false}
                     </div>
                  </div>
               </div>
               <div className={s.imageContainer}>
                  <FileUploaderSingle
                     defaultFoto={props.uploadImg}
                     setImageURL={setBackgroundLogo}
                     imageURL={backgroundLogo}
                     htmlFor={'backgroundLogo'}
                  />
                  <div className={s.uploadTitle}>
                     <FormattedMessage id="createEvent.title.BGImg" tagName="span" />
                  </div>
               </div>
            </div>
            <div className={s.descriptionContainer}>
               <div className={s.descriptionTitle}>
                  <FormattedMessage id="createEvent.title.description" tagName="span" />
               </div>
               {submitErr ? <p className={s.messageErr}>
                  <FormattedMessage id="err.errMessage" tagName="span" />
               </p> : false}
               <div className={submitErr ? s.textareaErr : false}>
                  <textarea
                     className={s.descriptionTextarea}
                     name=""
                     id=""
                     placeholder={descriptionPlaceholder}
                     type="text"
                     value={eventDescription}
                     onChange={(e) => changeTextValue(e.target.value, setEeventDescription)}
                     onBlur={chakedForm}
                  ></textarea>
               </div>
            </div>
            <div className={s.organizerPartnerFromContainr}>
               <div className={s.inputMainBottomContainer}>
                  <div className={s.inputContainer}>
                     <div className={s.title}>
                        <FormattedMessage id="createEvent.title.organizer" tagName="span" />
                     </div><br />
                     {submitErr ? <p className={s.messageErr}>
                        <FormattedMessage id="err.errMessage" tagName="span" />
                     </p> : false}
                     <div className={submitErr ? s.textareaErr : false}>
                        <input
                           type="text"
                           placeholder={organizerPlaceholder}
                           className={submitErr ? s.inputErr : false}
                           value={organizer}
                           onChange={(e) => changeTextValue(e.target.value, setOrganizer)}
                           onBlur={chakedForm}
                        />
                     </div>
                  </div>

                  {/* ///////////// */}
                  <div className={s.imageContainer}>
                     <div className={s.imgTitle}>
                        <FormattedMessage id="createEvent.title.imgTitle.eventLogo" tagName="span" />
                     </div>
                     {photoArrEventlogo.map((el, i) => <div>

                        <div key={i} className={s.btnContainer}>
                           <div
                              className={s.delBtn}
                              onClick={() => delPhoto(i, setInputArrEventlogo, photoArrEventlogo)}
                           ></div>
                           <FileUploaderSingle
                              defaultFoto={props.uploadImg}
                              imageURL={photoArrEventlogo[i]}
                              htmlFor={`event${i}`}
                              isMany={true}
                              onChangeDudlePhotos={onChangeDudlePhotos}
                              id={i}
                              fn={setInputArrEventlogo}
                              data={photoArrEventlogo}
                           />
                        </div>

                     </div>)}
                  </div>

                  <div className={s.addBtnContainer}>
                     <button
                        className={s.addBtn}
                        onClick={() => addPhotos(photoArrEventlogo, setInputArrEventlogo)}>
                        <FormattedMessage id="createEvent.btn.addCommunityLogo" tagName="span" />
                     </button>
                  </div>
                  {/* ////////////////////////// */}
               </div>
               <div className={s.inputMainBottomContainer}>

                  <div className={s.imageContainer}>
                     <div className={s.imgTitle}>
                        <FormattedMessage id="createEvent.title.imgTitle.sponsorLogo" tagName="span" />
                     </div>
                     {photoArrSponsorlogo.map((el, i) => <div>

                        <div key={i} className={s.btnContainer}>
                           <div
                              className={s.delBtn}
                              onClick={() => delPhoto(i, setInputArrSponsorlogo, photoArrSponsorlogo)}
                           ></div>
                           <FileUploaderSingle
                              defaultFoto={props.uploadImg}
                              imageURL={photoArrSponsorlogo[i]}
                              htmlFor={`sponsor${i}`}
                              isMany={true}
                              onChangeDudlePhotos={onChangeDudlePhotos}
                              id={i}
                              fn={setInputArrSponsorlogo}
                              data={photoArrSponsorlogo}
                           />
                        </div>

                     </div>)}
                  </div>

                  <div className={s.addBtnContainer}>
                     <button
                        className={s.addBtn}
                        onClick={() => addPhotos(photoArrSponsorlogo, setInputArrSponsorlogo)}>
                        <FormattedMessage id="createEvent.btn.addSponsorLogo" tagName="span" />
                     </button>
                  </div>

                  <div className={s.imageContainer}>
                     <div className={s.imgTitle}>
                        <FormattedMessage id="createEvent.title.imgTitle.partnerLogo" tagName="span" />
                     </div>
                     {photoArrPartnerlogo.map((el, i) => <div>

                        <div key={i} className={s.btnContainer}>
                           <div
                              className={s.delBtn}
                              onClick={() => delPhoto(i, setInputArrPartnerlogo, photoArrPartnerlogo)}
                           ></div>
                           <FileUploaderSingle
                              defaultFoto={props.uploadImg}
                              imageURL={photoArrPartnerlogo[i]}
                              htmlFor={`partner${i}`}
                              isMany={true}
                              onChangeDudlePhotos={onChangeDudlePhotos}
                              id={i}
                              fn={setInputArrPartnerlogo}
                              data={photoArrPartnerlogo}
                           />
                        </div>

                     </div>)}


                     <div className={s.addBtnContainer}>
                        <button
                           className={s.addBtn}
                           onClick={() => addPhotos(photoArrPartnerlogo, setInputArrPartnerlogo)}>
                           <FormattedMessage id="createEvent.btn.addPartnerLogo" tagName="span" />
                        </button>
                     </div>
                  </div>

                  <div className={s.imageContainer}>
                     <div className={s.imgTitle}>
                        <FormattedMessage id="createEvent.title.imgTitle.organizerLogo" tagName="span" />
                     </div>
                     {photoArrOrganizerlogo.map((el, i) => <div>

                        <div key={i} className={s.btnContainer}>
                           <div
                              className={s.delBtn}
                              onClick={() => delPhoto(i, setInputArrOrganizerlogo, photoArrOrganizerlogo)}
                           ></div>
                           <FileUploaderSingle
                              defaultFoto={props.uploadImg}
                              imageURL={photoArrOrganizerlogo[i]}
                              htmlFor={`organizerLogo${i}`}
                              isMany={true}
                              onChangeDudlePhotos={onChangeDudlePhotos}
                              id={i}
                              fn={setInputArrOrganizerlogo}
                              data={photoArrOrganizerlogo}
                           />
                        </div>

                     </div>)}


                     <div className={s.addBtnContainer}>
                        <button
                           className={s.addBtn}
                           onClick={() => addPhotos(photoArrOrganizerlogo, setInputArrOrganizerlogo)}>
                           <FormattedMessage id="createEvent.btn.addOrganizerLogo" tagName="span" />
                        </button>
                     </div>
                  </div>
               </div>
            </div>

            {/* game* */}
            <div className={s.selectContainer}>
               <div className={s.text}>
                  <FormattedMessage id="createEvent.title.titleGames" tagName="span" />
               </div>
               {submitErr ? <p className={s.messageErr}>
                  <FormattedMessage id="createEvent.title.titleObligatory" tagName="span" />
               </p> : false}
               <div className={submitErr ? s.selectErr : false}>
                  <CustomSelect
                     valuesBack={gamesBack.games}
                     isMulti={true}
                     placeholder={gamesPlaceholder}
                     initialValue={''}
                     onChangeValue={(e) => changeSelectValue(e, changeGames)}
                     itemParams={'title'}
                     typeValue={'value'}
                     onBlurChaked={(e) => chakedSelct(e.length > 0)}
                  />
               </div>
            </div>

            {/* Type of the Event*/}
            <div className={s.selectContainer}>
               <div className={s.text}>
                  <FormattedMessage id="createEvent.title.titleTypeEvent" tagName="span" />
               </div>
               {submitErr ? <p className={s.messageErr}>
                  <FormattedMessage id="createEvent.title.titleObligatory" tagName="span" />
               </p> : false}
               <div className={submitErr ? s.selectErr : false}>
                  <CustomSelect
                     valuesBack={[
                        { id: 1, name: 'online' },
                        { id: 2, name: 'offline' },
                        { id: 3, name: 'mixed' }
                     ]}
                     isMulti={false}
                     placeholder={typeEventPlaceholder}
                     initialValue={''}
                     onChangeValue={(e) => changeSelectValue(e, setTypeEvent)}
                     itemParams={'name'}
                     typeValue={'label'}
                     onBlurChaked={(e) => chakedSelct(e.length > 0)}
                  />
               </div>
            </div>

            {(typeEvent === 'offline' || typeEvent === 'mixed') ? <div className={s.inputContainer}>
               <div className={s.titleInput}>
                  <FormattedMessage id="createEvent.title.titleLocation" tagName="span" />
               </div>
               {/* {submitErr ? <p className={s.messageErr}>Obligatory field</p> : false} */}
               <input
                  /* className={submitErr ? s.inputErr : false} */
                  type="text"
                  placeholder={LocationPlaceholder}
                  value={location}
                  onChange={(e) => changeTextValue(e.target.value, setLocation)}
               />
            </div> : false}

            {/* Community*/}
            <div className={s.selectContainer}>
               <div className={s.text}>
                  <FormattedMessage id="createEvent.title.titleCommunity" tagName="span" />
               </div>
               {submitErr ? <p className={s.messageErr}>
                  <FormattedMessage id="createEvent.title.titleObligatory" tagName="span" />
               </p> : false}
               <div className={submitErr ? s.selectErr : false}>
                  <CustomSelect
                     valuesBack={communitysBack}
                     isMulti={false}
                     placeholder={communityPlaceholder}
                     initialValue={''}
                     onChangeValue={(e) => changeSelectValue(e, setCommunity)}
                     onBlurChaked={(e) => chakedSelct(e)}
                     itemParams={'name'}
                     typeValue={'value'}
                  />
               </div>
            </div>

            {/* Layer*/}
            <div className={s.selectContainer}>
               <div className={s.text}>
                  <FormattedMessage id="createEvent.title.titleLayer" tagName="span" />
               </div>
               {submitErr ? <p className={s.messageErr}>
                  <FormattedMessage id="createEvent.title.titleObligatory" tagName="span" />
               </p> : false}
               <div className={submitErr ? s.selectErr : false}>
                  <CustomSelect
                     valuesBack={[
                        { id: 1, name: 'International' },
                        { id: 2, name: 'Regional' },
                        { id: 3, name: 'National' },
                        { id: 4, name: 'Local' },
                        { id: 5, name: 'SAGES legendary series' },
                     ]}
                     isMulti={false}
                     placeholder={layerPlaceholder}
                     initialValue={''}
                     onChangeValue={(e) => changeSelectValue(e, setLayer)}
                     itemParams={'name'}
                     typeValue={'label'}
                     onBlurChaked={(e) => chakedSelct(e)}
                  />
               </div>
            </div>

            <div className={s.btnContainer}>
               <div className={s.text}>
                  <FormattedMessage id="createEvent.title.titleCircuit" tagName="span" />
               </div>
               <a target="_blank" href="https://app.passport.gg/support">
                  <button>Request  affiliation to circuit and grade</button>
               </a>
            </div>

            <div className={s.btnContainer}>
               <div className={s.text}>
                  <FormattedMessage id="createEvent.title.titleRating" tagName="span" />
               </div>
               <a target="_blank" href="https://app.passport.gg/support">
                  <button>
                     <FormattedMessage id="createEvent.title.btnRequest" tagName="span" />
                  </button>
               </a>
            </div>

            <div className={s.inputContainerLower}>
               {/* <div className={s.inputText}>
                  <FormattedMessage id="createEvent.title.titleTeamOrganizer" tagName="span" />
               </div>
               {inputArrOrganizer.map((el, i) =>
                  <div className={`${s.inputBlock} ${s.inputBr}`}>

                     <div className={s.inputContainer}>
                        <input
                           type="text"
                           placeholder={teamOrganizerNamePlaceholder}

                           value={inputArrOrganizer[i].name}
                           onChange={(e) => onChangeDudleInput(e, i, "name", setInputArrOrganizer, inputArrOrganizer)}
                        />
                     </div>
                     <div className={s.inputContainer}>
                        <input
                           type="text"
                           placeholder={contactsNameTitlePlaceholder}
                           value={inputArrOrganizer[i].title}
                           onChange={(e) => onChangeDudleInput(e, i, "title", setInputArrOrganizer, inputArrOrganizer)}
                        />
                     </div>
                  </div>
               )}

               <div className={s.addBtnContainer}>
                  <div
                     className={s.addImg}
                     onClick={() => addInputs(inputArrOrganizer, setInputArrOrganizer)}>
                  </div>
               </div> */}

               <div className={s.inputText}>
                  <FormattedMessage id="createEvent.title.titleContacts" tagName="span" />
               </div>
               {inputArrContacts.map((el, i) =>
                  <div className={`${s.inputBlock} ${s.inputBr}`}>

                     <div className={s.inputContainer}>
                        <input
                           type="text"
                           placeholder={contactsNamePlaceholder}
                           value={inputArrContacts[i].name}
                           onChange={(e) => onChangeDudleInput(e, i, "name", setInputArrContacts, inputArrContacts)}
                        />
                     </div>
                     <div className={s.inputContainer}>
                        <input
                           type="text"
                           placeholder={teamOrganizerTitlePlaceholder}
                           value={inputArrContacts[i].title}
                           onChange={(e) => onChangeDudleInput(e, i, "title", setInputArrContacts, inputArrContacts)}
                        />
                     </div>
                  </div>
               )}

               <div className={s.addBtnContainer}>
                  <div
                     className={s.addImg}
                     onClick={() => addInputs(inputArrContacts, setInputArrContacts)}>
                  </div>
               </div>

            </div>

            <div className={s.socialNetworksContainer}>
               <div className={s.text}>
                  <FormattedMessage id="createEvent.title.titleSocialNetworks" tagName="span" />
               </div>
               <div className={s.inputBlock}>
                  {facebookErr ? <p className={s.messageErr}>
                     <FormattedMessage id="err.errMessage.СheckData" tagName="span" />
                  </p> : false}
                  <div className={s.title}>
                     <FormattedMessage id="createEvent.title.titleFacebook" tagName="span" />
                  </div>
                  <div className={s.inputContainer}>
                     <input
                        type="text"
                        placeholder={socialNetworksLinkPlaceholder}
                        className={facebookErr ? s.inputErr : false}
                        value={facebookLink}
                        onChange={(e) => changeTextValue(e.target.value, setFacebookLink)}
                        onBlur={(e) => chakedSocialNetworks(e, 'facebook', setFacebookErr)}
                     />
                  </div>
               </div>
               <div className={s.inputBlock}>
                  {instagramErr ? <p className={s.messageErr}>
                     <FormattedMessage id="err.errMessage.СheckData" tagName="span" /></p> : false}
                  <div className={s.title}>
                     <FormattedMessage id="createEvent.title.titleInstagram" tagName="span" />
                  </div>
                  <div className={s.inputContainer}>
                     <input
                        type="text"
                        placeholder={socialNetworksLinkPlaceholder}
                        className={instagramErr ? s.inputErr : false}
                        value={instagramLink}
                        onChange={(e) => changeTextValue(e.target.value, setInstagramLink)}
                        onBlur={(e) => chakedSocialNetworks(e, 'instagram', setInstagramErr)}
                     />
                  </div>
               </div>
               <div className={s.inputBlock}>
                  {discordErr ? <p className={s.messageErr}>
                     <FormattedMessage id="err.errMessage.СheckData" tagName="span" />
                  </p> : false}
                  <div className={s.title}>
                     <FormattedMessage id="createEvent.title.titleDiscord" tagName="span" />
                  </div>
                  <div className={s.inputContainer}>
                     <input
                        type="text"
                        placeholder={socialNetworksLinkPlaceholder}
                        className={discordErr ? s.inputErr : false}
                        value={discordLink}
                        onChange={(e) => changeTextValue(e.target.value, setDiscordLink)}
                        onBlur={(e) => chakedSocialNetworks(e, 'discord', setDiscordErr)}
                     />
                  </div>
               </div>
               <div className={s.inputBlock}>
                  {twitterErr ? <p className={s.messageErr}>
                     <FormattedMessage id="err.errMessage.СheckData" tagName="span" />
                  </p> : false}
                  <div className={s.title}>
                     <FormattedMessage id="createEvent.title.titleTwitter" tagName="span" />
                  </div>
                  <div className={s.inputContainer}>
                     <input
                        type="text"
                        placeholder={socialNetworksLinkPlaceholder}
                        className={twitterErr ? s.inputErr : false}
                        value={twitterLink}
                        onChange={(e) => changeTextValue(e.target.value, setTwitterLink)}
                        onBlur={(e) => chakedSocialNetworks(e, 'twitter', setTwitterErr)}
                     />
                  </div>
               </div>
            </div>

            <div className={s.inputMainBottomContainer}>
               <div className={s.imageContainer}>
                  <div className={s.imgTitle}>
                     <FormattedMessage id="createEvent.title.titlePhotos" tagName="span" />
                  </div>
                  {photoAnyPhotos.map((el, i) => <div>

                     <div key={i} className={s.btnContainer}>
                        <div
                           className={s.delBtn}
                           onClick={() => delPhoto(i, setInputAnyPhotos, photoAnyPhotos)}
                        ></div>
                        <FileUploaderSingle
                           defaultFoto={props.uploadImg}
                           imageURL={photoAnyPhotos[i]}
                           htmlFor={`anyPhotos${i}`}
                           isMany={true}
                           onChangeDudlePhotos={onChangeDudlePhotos}
                           id={i}
                           fn={setInputAnyPhotos}
                           data={photoAnyPhotos}
                        />
                     </div>

                  </div>)}
               </div>

               <div className={s.addBtnContainer}>
                  <button
                     className={s.addBtn}
                     onClick={() => addPhotos(photoAnyPhotos, setInputAnyPhotos)}>
                     <FormattedMessage id="createEvent.btn.addAnyPhotosLogo" tagName="span" />
                  </button>
               </div>
            </div>

            {facebookErr || instagramErr || discordErr || twitterErr || submitErr ? <div disabled onClick={onSubmit} className={s.createBtn}>
               <FormattedMessage id="createEvent.btn.createEvent" tagName="span" />
            </div> : <div onClick={onSubmit} className={s.createBtn}><FormattedMessage id="createEvent.btn.createEvent" tagName="span" /></div>}
         </div>

      </div >
   )
}
export default CreateEvent;