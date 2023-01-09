import React, { useState, useEffect } from 'react';

import { API, API_ROUTER } from "../../../api/index";
import { ROUTER } from "../../../config";

import { convertDate } from '../../../comon/convertDate';
import { useHistory } from "react-router-dom";
import { formatGame } from './const';
import { uploadData, onChangeDudlePhotos, addPhotos, delPhoto } from '../../../comon/uploadData';

import s from './createTournament.module.scss';

import { FormattedMessage } from "react-intl";
import { useIntl } from "react-intl";

import Calendar from '../../../comon/Calendar/index';
import CustomSelect from '../../../comon/CustomSelect';
import FileUploaderMany from '../../../comon/file-uploader-for-many';
import FileUploaderSingle from '../../../comon/file-uploader-for-single';

const CreateTournament = (props) => {

   //Мультиязычность Placeholder
   const tournamentNamePlaceholder = useIntl().formatMessage({
      id: "createTournament.title.tournamentName.placeholder",
   });
   const descriptionPlaceholder = useIntl().formatMessage({
      id: "createTournament.title.description.placeholder",
   });
   const organizerPlaceholder = useIntl().formatMessage({
      id: "createTournament.title.organizer.placeholder",
   });
   const gamesPlaceholder = useIntl().formatMessage({
      id: "createTournament.title.titleGames.placeholder",
   });
   const typeTournamentPlaceholder = useIntl().formatMessage({
      id: "createTournament.title.titleTypeTournament.placeholder",
   });
   const formatPlaceholder = useIntl().formatMessage({
      id: "createTournament.title.format.placeholder",
   });
   const maximumNumberPlaceholder = useIntl().formatMessage({
      id: "createTournament.title.titleMaximumNumber.placeholder",
   });
   const locationPlaceholder = useIntl().formatMessage({
      id: "createTournament.title.titleLocation.placeholder",
   });
   const communityPlaceholder = useIntl().formatMessage({
      id: "createTournament.title.titleCommunity.placeholder",
   });
   const eventPlaceholder = useIntl().formatMessage({
      id: "createTournament.title.titleEvent.placeholder",
   });
   const prizePlaceholder = useIntl().formatMessage({
      id: "createTournament.title.prize.placeholder",
   });
   const layerPlaceholder = useIntl().formatMessage({
      id: "createEvent.title.titleLayer.placeholder",
   });
   const rulesPlaceholder = useIntl().formatMessage({
      id: "createTournament.title.rules.titleLayer",
   });
   const contactsNamePlaceholder = useIntl().formatMessage({
      id: "placeholderName",
   });
   const contactsNameTitlePlaceholder = useIntl().formatMessage({
      id: "placeholderTitle",
   });
   const titleContactsPlaceholder = useIntl().formatMessage({
      id: "createTournament.title.titleContacts.placeholder",
   });
   const titleContactsSecondPlaceholder = useIntl().formatMessage({
      id: "createTournament.title.titleContacts.second.placeholder",
   });
   const ServerAnswerSuccess = useIntl().formatMessage({
      id: "createTournament.serverAnswer.success",
   });
   const ServerAnswerErr = useIntl().formatMessage({
      id: "createTournament.serverAnswer.err",
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
         .catch((err) => console.log(err));
   }, [])

   useEffect(() => {
      let params = {
         ...API_ROUTER.events.getEvents,
         pathKeys: {
            page: 1,
            limit: 9999,
         }
      };

      API.request(params)
         .then((res) => {
            console.log(res.events);
            let newArr = [{ name: null }, ...res.events];
            setEventsBack(newArr);
         })
         .catch((err) => console.log(err));
   }, []);

   //dateStartCalendar
   const [dateStartIsVisible, setDateStartIsVisible] = useState(false);
   const [dateStartIsVisibleReg, setDateStartIsVisibleReg] = useState(false);
   //dateEndCalendar
   const [dateEndIsVisible, setDateEndVisible] = useState(false);
   const [dateEndIsVisibleReg, setDateEndVisibleReg] = useState(false);

   //dateStart
   const [calendarDateStart, setCalendarDateStart] = useState(props.convertDateISO8601(new Date()));
   const [calendarDateStartReg, setCalendarDateStartReg] = useState(props.convertDateISO8601(new Date()));

   const handleDateStartChange = e => setCalendarDateStart(props.convertDateISO8601(e));
   const handleDateStartChangeReg = e => setCalendarDateStartReg(props.convertDateISO8601(e));

   //dateEnd
   const [calendarDateEnd, setCalendarDateEnd] = useState(props.convertDateISO8601(new Date()));
   const [calendarDateEndReg, setCalendarDateEndReg] = useState(props.convertDateISO8601(new Date()));

   const handleDateEndChange = e => setCalendarDateEnd(props.convertDateISO8601(e));
   const handleDateEndChangeReg = e => setCalendarDateEndReg(props.convertDateISO8601(e));

   //eventName
   const [eventName, setEventName] = useState('')
   //eventDescription
   const [eventDescription, setEeventDescription] = useState('');
   //Prize
   const [prizeDescription, setPrizeDescription] = useState('');
   //Rules
   const [rulesDescription, setRulesDescription] = useState('');

   /* const [userId, setUserId] = useState(''); Удалить?*/
   const [communitysBack, setCommunitysBack] = useState([]);
   const [eventsBack, setEventsBack] = useState([]);
   const [layer, setLayer] = useState('');

   const [gamesBack, setGamesFromBack] = useState('');
   const [games, setGames] = useState('');
   const [typeEvent, setTypeEvent] = useState('');
   const [location, setLocation] = useState('');
   const [maxNumber, setMaxNumber] = useState(2);

   //organizer
   const [organizer, setOrganizer] = useState('');
   const [community, setCommunity] = useState('');

   //Events
   const [events, setEvents] = useState(null);

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

   //add inputs Contacts
   const [inputArrContacts, setInputArrContacts] = useState([{ name: "", title: "" }]);
   //format
   const [format, setFormat] = useState('');

   //add photo 
   const [photoArrTournamentlogo, setInputArrTournamentlogo] = useState(['1']);
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

   const history = useHistory();
   function goToUrl(url) {
      history.push(url);
   }

   const onSubmit = () => {
      if (eventName && calendarDateStart && eventDescription && organizer && layer && community) {

         API.request({
            ...API_ROUTER.Tournaments.createTournament,
            data: {
               type: "singleElimination",//????
               /* clientId: userId, */
               name: eventName,
               organizerName: organizer,
               description: eventDescription,
               participationType: "team",//????
               tournamentType: typeEvent,
               participationLimit: maxNumber,
               participantTeamSize: 5,//????
               contacts: inputArrContacts,
               socialNetworks: {
                  facebook: facebookLink,
                  instagram: instagramLink,
                  discord: discordLink,
                  twitter: twitterLink,
               },
               location: location,
               layer: layer,
               prizeFund: prizeDescription,
               rules: rulesDescription,
               gameId: games,
               eventId: events,
               communityId: community,
               dateStart: (calendarDateStart + "  00:00:00").replaceAll("/", "."),
               dateFinish: (calendarDateEnd + "  00:00:00").replaceAll("/", "."),
               dateStartRegistration: (calendarDateStartReg + "  00:00:00").replaceAll("/", "."),
               dateFinishRegistration: (calendarDateEndReg + "  00:00:00").replaceAll("/", "."),
            }
         })
            .then((res) => {
               console.log(res);

               setTimeout(() => {
                  if (backgroundLogo.length > 0) {
                     uploadData(backgroundLogo, res.id, 'tournamentBackgroundLogo')
                  }
               }, 0)

               //
               setTimeout(() => {
                  if (photoArrSponsorlogo != '1') {
                     photoArrSponsorlogo.map(el => uploadData(el, res.id, 'tournamentSponsorLogo'));
                  }
               }, 2000)
               setTimeout(() => {
                  if (photoArrPartnerlogo != '1') {
                     photoArrPartnerlogo.map(el => uploadData(el, res.id, 'tournamentPartnerLogo'));
                  }
               }, 3000)
               setTimeout(() => {
                  if (photoArrOrganizerlogo != '1') {
                     photoArrOrganizerlogo.map(el => uploadData(el, res.id, 'tournamentOrganizerLogo'));
                  }
               }, 4000)
               /* setTimeout(() => {
                  if (photoAnyPhotos != '1') {
                     photoAnyPhotos.map(el => uploadData(el, res.id, 'tournamentAnyPhotos'));
                  }
               }, 5000) */
               // на бэке просто нет этого

               setTimeout(() => {
                  alert(ServerAnswerSuccess);
                  goToUrl(ROUTER.tournamentsPage)
               }, 6000)
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
                  <FormattedMessage id="createTournament.pageName.title" tagName="span" />
               </div>
            </div>

            <div className={s.mainSattingsContainer}>
               <div className={s.settingsContainer}>
                  <div className={s.inputContainer}>
                     <div className={s.titleInput}>
                        <FormattedMessage id="createTournament.title.tournamentName" tagName="span" />
                     </div>
                     {submitErr ? <p className={s.messageErr}>
                        <FormattedMessage id="err.errMessage" tagName="span" />
                     </p> : false}
                     <input
                        className={submitErr ? s.inputErr : false}
                        type="text"
                        placeholder={tournamentNamePlaceholder}
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
                           <FormattedMessage id="createTournament.title.startTitle" tagName="span" />
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
                        onMouseEnter={() => setDateEndVisibleReg(true)}
                        onMouseLeave={() => setDateEndVisibleReg(false)}
                     >
                        <div className={s.titleBtn}>
                           <FormattedMessage id="createTournament.title.endTitle" tagName="span" />
                        </div>
                        <button className={s.filterBtn}>
                           {calendarDateEnd}
                        </button>

                        {dateEndIsVisibleReg ? <div className={s.calendarModal}>
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
                     htmlFor={'logoLanding'}
                  />
                  <div className={s.uploadTitle}>
                     <FormattedMessage id="createTournament.title.BGImg" tagName="span" />
                  </div>
               </div>
            </div>

            {/* ............. */}

            <div className={s.mainSattingsContainer}>
               <div className={s.settingsContainer}>
                  <div className={s.btnContainer}>
                     <div
                        className={s.btnInnerContainer}
                        onMouseEnter={() => setDateStartIsVisibleReg(true)}
                        onMouseLeave={() => setDateStartIsVisibleReg(false)}
                     >
                        <div className={s.titleBtn}>
                           <FormattedMessage id="createTournament.title.regStarTitle" tagName="span" />
                        </div>
                        <button className={s.filterBtn}>
                           {calendarDateStartReg}
                        </button>

                        {dateStartIsVisibleReg ? <div className={s.calendarModal}>
                           <Calendar onChange={handleDateStartChangeReg} />
                        </div> : false}
                     </div>
                     <div
                        className={s.btnInnerContainer}
                        onMouseEnter={() => setDateEndVisible(true)}
                        onMouseLeave={() => setDateEndVisible(false)}
                     >
                        <div className={s.titleBtn}>
                           <FormattedMessage id="createTournament.title.regEndTitle" tagName="span" />
                        </div>
                        <button className={s.filterBtn}>
                           {calendarDateEndReg}
                        </button>

                        {dateEndIsVisible ? <div className={s.calendarModal}>
                           <Calendar onChange={handleDateEndChangeReg} />
                        </div> : false}
                     </div>
                  </div>
               </div>

            </div>

            {/* .......... */}

            <div className={s.descriptionContainer}>
               <div className={s.descriptionTitle}>
                  <FormattedMessage id="createTournament.title.description" tagName="span" />
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
                        <FormattedMessage id="createTournament.title.organizer" tagName="span" />
                     </div><br />
                     {submitErr ? <p className={s.messageErr}>
                        <FormattedMessage id="err.errMessage" tagName="span" />
                     </p> : false}
                     <div className={submitErr ? s.textareaErr : false}>
                        <input
                           type="text"
                           placeholder={organizerPlaceholder}
                           className={submitErr ? s.inputErr : false}
                           valaue={organizer}
                           onChange={(e) => changeTextValue(e.target.value, setOrganizer)}
                           onBlur={chakedForm}
                        />
                     </div>
                  </div>

                  <div className={s.imageContainer}>
                     <div className={s.imageContainer}>
                        <div className={s.imgTitle}>
                           <FormattedMessage id="createTournament.title.imgTitle.tournamentLogo" tagName="span" />
                        </div>
                        {photoArrTournamentlogo.map((el, i) => <div>

                           <div key={i} className={s.btnContainer}>
                              <div
                                 className={s.delBtn}
                                 onClick={() => delPhoto(i, setInputArrTournamentlogo, photoArrTournamentlogo)}
                              ></div>
                              <FileUploaderSingle
                                 defaultFoto={props.uploadImg}
                                 imageURL={photoArrTournamentlogo[i]}
                                 htmlFor={`tournamentLogo${i}`}
                                 isMany={true}
                                 onChangeDudlePhotos={onChangeDudlePhotos}
                                 id={i}
                                 fn={setInputArrTournamentlogo}
                                 data={photoArrTournamentlogo}
                              />
                           </div>

                        </div>)}
                     </div>

                     <div className={s.addBtnContainer}>
                        <button
                           className={s.addBtn}
                           onClick={() => addPhotos(photoArrTournamentlogo, setInputArrTournamentlogo)}>
                           <FormattedMessage id="createTournament.btn.addCommunityLogo" tagName="span" />
                        </button>
                     </div>

                  </div>

               </div>
               <div className={s.inputMainBottomContainer}>

                  <div className={s.imageContainer}>
                     <div className={s.imageContainer}>
                        <div className={s.imgTitle}>
                           <FormattedMessage id="createTournament.title.imgTitle.sponsorLogo" tagName="span" />
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
                           <FormattedMessage id="createCommunity.btn.addSponsorLogo" tagName="span" />
                        </button>
                     </div>
                  </div>

                  <div className={s.imageContainer}>
                     <div className={s.imgTitle}>
                        <FormattedMessage id="createTournament.title.imgTitle.partnerLogo" tagName="span" />
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
                  </div>

                  <div className={s.addBtnContainer}>
                     <button
                        className={s.addBtn}
                        onClick={() => addPhotos(photoArrPartnerlogo, setInputArrPartnerlogo)}>
                        <FormattedMessage id="createTournament.btn.addPartnerLogo" tagName="span" />
                     </button>
                  </div>

                  <div className={s.imageContainer}>

                     <div className={s.imageContainer}>
                        <div className={s.imgTitle}>
                           <FormattedMessage id="createTournament.title.imgTitle.organizerLogo" tagName="span" />
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
                     </div>

                     <div className={s.addBtnContainer}>
                        <button
                           className={s.addBtn}
                           onClick={() => addPhotos(photoArrOrganizerlogo, setInputArrOrganizerlogo)}>
                           <FormattedMessage id="createTournament.btn.addOrganizerLogo" tagName="span" />
                        </button>
                     </div>
                     {/* <div className={s.imgTitle}>
                        <FormattedMessage id="createTournament.title.imgTitle.organizerLogo" tagName="span" />
                     </div>

                     <div className={s.btnContainer}>
                        <FileUploaderMany
                           defaultFoto={props.uploadImg}
                           setImageURL={setOrganizerLogo}
                           imageURL={organizerLogo}
                           htmlFor={'organizerLogo'}
                        />
                     </div> */}
                  </div>
               </div>
            </div>

            {/* game */}
            <div className={s.selectContainer}>
               <div className={s.text}>
                  <FormattedMessage id="createTournament.title.titleGames" tagName="span" />
               </div>
               {submitErr ? <p className={s.messageErr}>
                  <FormattedMessage id="createTournament.title.titleObligatory" tagName="span" />
               </p> : false}
               <div className={submitErr ? s.selectErr : false}>
                  <CustomSelect
                     valuesBack={gamesBack.games}
                     isMulti={false}
                     placeholder={gamesPlaceholder}
                     initialValue={''}
                     onChangeValue={(e) => changeSelectValue(e, setGames)}
                     itemParams={'title'}
                     typeValue={'value'}
                     onBlurChaked={(e) => chakedSelct(e)}
                  />
               </div>
            </div>

            {/* format */}
            <div className={s.selectContainer}>
               <div className={s.text}>
                  <FormattedMessage id="createTournament.title.format" tagName="span" />
               </div>
               {submitErr ? <p className={s.messageErr}>
                  <FormattedMessage id="createTournament.title.titleObligatory" tagName="span" />
               </p> : false}
               <div className={submitErr ? s.selectErr : false}>
                  <CustomSelect
                     valuesBack={formatGame}
                     isMulti={false}
                     placeholder={formatPlaceholder}
                     initialValue={''}
                     onChangeValue={(e) => changeSelectValue(e, setFormat)}
                     itemParams={'name'}
                     typeValue={'value'}
                     onBlurChaked={(e) => chakedSelct(e)}
                  />
               </div>
            </div>

            <div className={s.inputContainer}>
               <div className={s.titleInput}>
                  <FormattedMessage id="createTournament.title.titleMaximumNumber" tagName="span" />
               </div>
               {maxNumber % 2 === 0 ? false : <FormattedMessage id="createTournament.title.titleMaximumNumber.err" tagName="span" />}
               <input
                  className={maxNumber % 2 === 0 ? false : s.inputErr}
                  type="text"
                  placeholder={maximumNumberPlaceholder}
                  value={maxNumber}
                  onChange={(e) => setMaxNumber(+e.target.value)}
               />
            </div>

            {/* Type of the Event*/}
            <div className={s.selectContainer}>
               <div className={s.text}>
                  <FormattedMessage id="createTournament.title.titleTypeTournament" tagName="span" />
               </div>

               {submitErr ? <p className={s.messageErr}>
                  <FormattedMessage id="createTournament.title.titleObligatory" tagName="span" />
               </p> : false}

               <div className={submitErr ? s.selectErr : false}>
                  <CustomSelect
                     valuesBack={[
                        { id: 1, name: 'online' },
                        { id: 2, name: 'offline' },
                        { id: 3, name: 'mixed' }
                     ]}
                     isMulti={false}
                     placeholder={typeTournamentPlaceholder}
                     initialValue={''}
                     onChangeValue={setTypeEvent}
                     itemParams={'name'}
                     typeValue={'label'}
                     onBlurChaked={(e) => chakedSelct(e)}
                  />
               </div>
            </div>

            {(typeEvent === 'offline' || typeEvent === 'mixed') ? <div className={s.inputContainer}>
               <div className={s.titleInput}>
                  <FormattedMessage id="createTournament.title.titleLocation" tagName="span" />
               </div>
               {/* {submitErr ? <p className={s.messageErr}>Obligatory field</p> : false} */}
               <input
                  /* className={submitErr ? s.inputErr : false} */
                  type="text"
                  placeholder={locationPlaceholder}
                  value={location}
                  onChange={(e) => changeTextValue(e.target.value, setLocation)}
               />
            </div> : false}

            {/* Community*/}
            <div className={s.selectContainer}>
               <div className={s.text}>
                  <FormattedMessage id="createTournament.title.titleCommunity" tagName="span" />
               </div>
               {submitErr ? <p className={s.messageErr}>
                  <FormattedMessage id="createTournament.title.titleObligatory" tagName="span" />
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

            {/* Event*/}
            <div className={s.selectContainer}>
               <div className={s.text}>
                  <FormattedMessage id="createTournament.title.titleEvent" tagName="span" />
               </div>
               {/* {submitErr ? <p className={s.messageErr}>
                  <FormattedMessage id="createTournament.title.titleObligatory" tagName="span" />
               </p> : false} */}
               <div /* className={submitErr ? s.selectErr : false} */>
                  <CustomSelect
                     valuesBack={eventsBack}
                     isMulti={false}
                     placeholder={eventPlaceholder}
                     initialValue={''}
                     onChangeValue={(e) => setEvents(e)}
                     itemParams={'name'}
                     typeValue={'value'}
                     onBlurChaked={(e) => console.log(e)}
                  />
               </div>
            </div>

            <div className={s.btnContainer}>
               <div className={s.text}>
                  <FormattedMessage id="createTournament.title.titleCircuit" tagName="span" />
               </div>
               <a target="_blank" href="https://app.passport.gg/support">
                  <button>Request  affiliation to circuit and grade</button>
               </a>
            </div>

            <div className={s.btnContainer}>
               <div className={s.text}>
                  <FormattedMessage id="createTournament.title.titleRating" tagName="span" />
               </div>
               <a target="_blank" href="https://app.passport.gg/support">
                  <button>
                     <FormattedMessage id="createTournament.title.btnRequest" tagName="span" />
                  </button>
               </a>
            </div>

            {/* Prize Fund */}
            <div className={s.descriptionContainer}>
               <div className={s.descriptionTitle}>
                  <FormattedMessage id="createTournament.title.prize" tagName="span" />
               </div>
               <textarea
                  className={s.descriptionTextarea}
                  name=""
                  id=""
                  placeholder={prizePlaceholder}
                  type="text"
                  value={prizeDescription}
                  onChange={(e) => changeTextValue(e.target.value, setPrizeDescription)}
               ></textarea>
            </div>

            {/* Layer*/}
            <div className={s.selectContainer}>
               <div className={s.text}>
                  <FormattedMessage id="createTournament.title.titleLayer" tagName="span" />
               </div>
               {submitErr ? <p className={s.messageErr}>
                  <FormattedMessage id="createTournament.title.titleObligatory" tagName="span" />
               </p> : false}
               <div className={submitErr ? s.selectErr : false}>
                  <CustomSelect
                     valuesBack={[
                        { id: 1, name: 'International' },
                        { id: 2, name: 'Regional' },
                        { id: 3, name: 'National' },
                        { id: 4, name: 'Local' },
                        { id: 5, name: 'SAGES Legendary Series' },
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

            {/* Rules */}
            <div className={s.descriptionContainer}>
               <div className={s.descriptionTitle}>
                  <FormattedMessage id="createTournament.title.rules" tagName="span" />
               </div>
               <textarea
                  className={s.descriptionTextarea}
                  name=""
                  id=""
                  placeholder={rulesPlaceholder}
                  type="text"
                  value={rulesDescription}
                  onChange={(e) => changeTextValue(e.target.value, setRulesDescription)}
               ></textarea>
            </div>

            <div className={s.inputContainerLower}>

               <div className={s.inputText}>
                  <FormattedMessage id="createTournament.title.titleContacts" tagName="span" />
               </div>
               {inputArrContacts.map((el, i) =>
                  <div className={`${s.inputBlock} ${s.inputBr}`}>

                     <div className={s.inputContainer}>
                        {/* {submitErr ? <p className={s.messageErr}>Obligatory field</p> : false} */}
                        {/* <div className={submitErr ? s.textareaErr : false}> */}
                        <input
                           type="text"
                           placeholder={titleContactsPlaceholder}
                           /* className={submitErr ? s.inputErr : false} */
                           value={inputArrContacts[i].name}
                           onChange={(e) => onChangeDudleInput(e, i, "name", setInputArrContacts, inputArrContacts)}
                        /* onBlur={chakedForm} */
                        />
                     </div>
                     <div className={s.inputContainer}>
                        {/* {submitErr ? <p className={s.messageErr}>Obligatory field</p> : false} */}
                        {/* <div className={submitErr ? s.textareaErr : false}> */}
                        <input
                           type="text"
                           placeholder={titleContactsSecondPlaceholder}
                           /* className={submitErr ? s.inputErr : false} */
                           valaue={inputArrContacts[i].title}
                           onChange={(e) => onChangeDudleInput(e, i, "title", setInputArrContacts, inputArrContacts)}
                        /* onBlur={chakedForm} */
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
                  <FormattedMessage id="createTournament.title.titleSocialNetworks" tagName="span" />
               </div>
               <div className={s.inputBlock}>
                  {facebookErr ? <p className={s.messageErr}>
                     <FormattedMessage id="err.errMessage.СheckData" tagName="span" />
                  </p> : false}
                  <div className={s.title}>
                     <FormattedMessage id="createTournament.title.titleFacebook" tagName="span" />
                  </div>
                  <div className={s.inputContainer}>
                     <input
                        type="text"
                        placeholder='Link'
                        className={facebookErr ? s.inputErr : false}
                        valaue={facebookLink}
                        onChange={(e) => changeTextValue(e.target.value, setFacebookLink)}
                        onBlur={(e) => chakedSocialNetworks(e, 'facebook', setFacebookErr)}
                     />
                  </div>
               </div>
               <div className={s.inputBlock}>
                  {instagramErr ? <p className={s.messageErr}>
                     <FormattedMessage id="err.errMessage.СheckData" tagName="span" /></p> : false}
                  <div className={s.title}>
                     <FormattedMessage id="createTournament.title.titleInstagram" tagName="span" />
                  </div>
                  <div className={s.inputContainer}>
                     <input
                        type="text"
                        placeholder='Link'
                        className={instagramErr ? s.inputErr : false}
                        valaue={instagramLink}
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
                     <FormattedMessage id="createTournament.title.titleDiscord" tagName="span" />
                  </div>
                  <div className={s.inputContainer}>
                     <input
                        type="text"
                        placeholder='Link'
                        className={discordErr ? s.inputErr : false}
                        valaue={discordLink}
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
                     <FormattedMessage id="createTournament.title.titleTwitter" tagName="span" />
                  </div>
                  <div className={s.inputContainer}>
                     <input
                        type="text"
                        placeholder='Link'
                        className={twitterErr ? s.inputErr : false}
                        valaue={twitterLink}
                        onChange={(e) => changeTextValue(e.target.value, setTwitterLink)}
                        onBlur={(e) => chakedSocialNetworks(e, 'twitter', setTwitterErr)}
                     />
                  </div>
               </div>
            </div>

            <div className={s.inputMainBottomContainer}>
               <div className={s.imageContainer}>
                  <div className={s.imgTitle}>
                     <FormattedMessage id="createTournament.title.titlePhotos" tagName="span" />
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
                     <FormattedMessage id="createCommunity.btn.addAnyPhotosLogo" tagName="span" />
                  </button>
               </div>
            </div>

            {facebookErr || instagramErr || discordErr || twitterErr || submitErr ? <div disabled onClick={onSubmit} className={s.createBtn}>
               <FormattedMessage id="createTournament.btn.createTournament" tagName="span" />
            </div> : <div onClick={onSubmit} className={s.createBtn}><FormattedMessage id="createTournament.btn.createTournament" tagName="span" /></div>}
         </div>

      </div >
   )
}
export default CreateTournament;