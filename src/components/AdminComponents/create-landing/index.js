import React, { useState, useEffect } from 'react';
import { FormattedMessage } from "react-intl";
import { useIntl } from "react-intl";
import Select from 'react-select';

import { API, API_ROUTER } from "../../../api/index";
import { ROUTER } from "../../../config";
import { uploadImg } from "../../../comon/comonConst";
import { uploadData, onChangeDudlePhotos, addPhotos, delPhoto } from '../../../comon/uploadData';
import { useHistory } from "react-router-dom";

import s from './createLanding.module.scss';
import '../../../comon/CustomSelect/select.scss';
import FileUploaderSingle from '../../../comon/file-uploader-for-single';
import FileUploaderMany from '../../../comon/file-uploader-for-many';

export const MAX_LANGUAGES_COUND = 3;
export const REQUIRED_LANGUIGE_NAME = 'EN';
export const LANDING_TYPES = [
   { id: 1, title: 'community' },
   { id: 2, title: 'event' },
   { id: 3, title: 'tournament' },
   { id: 4, title: 'custom' },
];
export const STREAM = [
   { id: 1, title: 'Yes' },
   { id: 2, title: 'No' },
];

const CreateLanding = () => {
   const [languages, setLanguages] = useState([]);
   const [error, setError] = useState('');

   const [selectLanguages, setSelectLanguages] = useState([]);
   const [type, setType] = useState('');
   const [stream, setStream] = useState('');
   const [requiredLanguageValueName, setRequiredLanguageValueName] = useState('');
   const [domainName, setDomainName] = useState('');
   const [domainSelection, setDomainSelection] = useState('free');
   const [requiredLanguageValueContent1, setRequiredLanguageValueContent1] = useState('');
   const [requiredLanguageValueContent2, setRequiredLanguageValueContent2] = useState('');
   const [requiredLanguageValueAbout1, setRequiredLanguageValueAbout1] = useState('');
   const [requiredLanguageValueAbout2, setRequiredLanguageValueAbout2] = useState('');
   const [requiredLanguageValueAbout3, setRequiredLanguageValueAbout3] = useState('');
   const [requiredLanguageValueOrganizer1, setRequiredLanguageValueOrganizer1] = useState('');
   const [requiredLanguageValueOrganizer2, setRequiredLanguageValueOrganizer2] = useState('');
   const [requiredLanguageValueOrganizer3, setRequiredLanguageValueOrganizer3] = useState('');
   const [requiredLanguageValueButtons1, setRequiredLanguageValueButtons1] = useState('');
   const [requiredLanguageValueButtons2, setRequiredLanguageValueButtons2] = useState('');
   const [requiredLanguageValueButtons3, setRequiredLanguageValueButtons3] = useState('');
   const [requiredLanguageValueButtons4, setRequiredLanguageValueButtons4] = useState('');
   const [requiredLanguageValueButtons5, setRequiredLanguageValueButtons5] = useState('');
   const [requiredLanguageValueRegistration1, setRequiredLanguageValueRegistration1] = useState('');
   const [requiredLanguageValueRegistration2, setRequiredLanguageValueRegistration2] = useState('');
   const [requiredLanguageValueRegistration3, setRequiredLanguageValueRegistration3] = useState('');
   const [requiredLanguageValueRegistration4, setRequiredLanguageValueRegistration4] = useState('');
   const [requiredLanguageValueRegistration5, setRequiredLanguageValueRegistration5] = useState('');
   const [requiredLanguageValueRegistration6, setRequiredLanguageValueRegistration6] = useState('');
   const [requiredLanguageValueRegistration7, setRequiredLanguageValueRegistration7] = useState('');
   const [requiredLanguageValueRegistration8, setRequiredLanguageValueRegistration8] = useState('');
   const [requiredLanguageValueRegistration9, setRequiredLanguageValueRegistration9] = useState('');
   const [requiredLanguageValueRegistration10, setRequiredLanguageValueRegistration10] = useState('');
   const [requiredLanguageValueRegistration11, setRequiredLanguageValueRegistration11] = useState('');
   const [requiredLanguageValueRegistration12, setRequiredLanguageValueRegistration12] = useState('');
   const [requiredLanguageValueRegistration13, setRequiredLanguageValueRegistration13] = useState('');
   const [requiredLanguageValueRegistration14, setRequiredLanguageValueRegistration14] = useState('');

   const [bannerImg, setBannerImg] = useState([]);
   const [logoLanding, setLogoLanding] = useState([]);
   const [logoOrganizer, setLogoOrganizer] = useState([]);
   const [logoSponsor, setLogoSponsor] = useState([]);
   const [logoPartners, setLogoPartners] = useState([]);
   const [flag, setFlag] = useState([]);
   const [banner, setBanner] = useState([]);
   const [gameLogo, setGameLogo] = useState([]);
   const [linkStream, setLinkStream] = useState('');
   const [mainColor, setMainColor] = useState('');

   //Мультиязычность Placeholder
   const typePlaceholder = useIntl().formatMessage({
      id: "createLanding.title.type.placeholder",
   });
   const languagePlaceholder = useIntl().formatMessage({
      id: "createLanding.title.language.placeholder",
   });
   const landingNamesPlaceholder = useIntl().formatMessage({
      id: "createLanding.title.landingName.placeholder",
   });
   const landingLinkPlaceholder = useIntl().formatMessage({
      id: "createLanding.title.linkStream.placeholder",
   });
   const landingDomainNamePlaceholder = useIntl().formatMessage({
      id: "createLanding.title.domainName.placeholder",
   });
   const ServerAnswerSuccess = useIntl().formatMessage({
      id: "createLanding.serverAnswer.success",
   });
   const ServerAnswerErr = useIntl().formatMessage({
      id: "createLanding.serverAnswer.err",
   });

   //Всё, что связанно с валидацией
   const [formValid, setFormValid] = useState(false);

   const [valueNameDirty, setValueNameDirty] = useState(false);
   const [valueAdditionalNameDirty, setValueAdditionalNameDirty] = useState(false);

   const [valuelinkStreamDirty, setLinkStreamDirty] = useState(false);
   const [domainNameDirty, setDomainNameDirty] = useState(false);

   const [textBlockContent1Dirty, setTextBlockContent1Dirty] = useState(false);
   const [textBlockContent1AdditionalDirty, setTextBlockContent1AdditionalDirty] = useState(false);

   const [textBlockContent2Dirty, setTextBlockContent2Dirty] = useState(false);
   const [textBlockContent2AdditionalDirty, setTextBlockContent2AdditionalDirty] = useState(false);

   const [textBlockAbout1Dirty, setTextBlockAbout1Dirty] = useState(false);
   const [textBlockAbout1AdditionalDirty, setTextBlockAbout1AdditionalDirty] = useState(false);

   const [textBlockAbout2Dirty, setTextBlockAbout2Dirty] = useState(false);
   const [textBlockAbout2AdditionalDirty, setTextBlockAbout2AdditionalDirty] = useState(false);

   const [textBlockAbout3Dirty, setTextBlockAbout3Dirty] = useState(false);
   const [textBlockAbout3AdditionalDirty, setTextBlockAbout3AdditionalDirty] = useState(false);

   const [textBlockOrganizer1Dirty, setTextBlockOrganizer1Dirty] = useState(false);
   const [textBlockOrganizer1AdditionalDirty, setTextBlockOrganizer1AdditionalDirty] = useState(false);

   const [textBlockOrganizer2Dirty, setTextBlockOrganizer2Dirty] = useState(false);
   const [textBlockOrganizer2AdditionalDirty, setTextBlockOrganizer2AdditionalDirty] = useState(false);

   const [textBlockOrganizer3Dirty, setTextBlockOrganizer3Dirty] = useState(false);
   const [textBlockOrganizer3AdditionalDirty, setTextBlockOrganizer3AdditionalDirty] = useState(false);

   const [textBlockButtons1Dirty, setTextBlockButtons1Dirty] = useState(false);
   const [textBlockButtons1AdditionalDirty, setTextBlockButtons1AdditionalDirty] = useState(false);

   const [textBlockButtons2Dirty, setTextBlockButtons2Dirty] = useState(false);
   const [textBlockButtons2AdditionalDirty, setTextBlockButtons2AdditionalDirty] = useState(false);

   const [textBlockButtons3Dirty, setTextBlockButtons3Dirty] = useState(false);
   const [textBlockButtons3AdditionalDirty, setTextBlockButtons3AdditionalDirty] = useState(false);

   const [textBlockButtons4Dirty, setTextBlockButtons4Dirty] = useState(false);
   const [textBlockButtons4AdditionalDirty, setTextBlockButtons4AdditionalDirty] = useState(false);

   const [textBlockButtons5Dirty, setTextBlockButtons5Dirty] = useState(false);
   const [textBlockButtons5AdditionalDirty, setTextBlockButtons5AdditionalDirty] = useState(false);

   const [textBlockRegistration1Dirty, setTextBlockRegistration1Dirty] = useState(false);
   const [textBlockRegistration1AdditionalDirty, setTextBlockRegistration1AdditionalDirty] = useState(false);

   const [textBlockRegistration2Dirty, setTextBlockRegistration2Dirty] = useState(false);
   const [textBlockRegistration2AdditionalDirty, setTextBlockRegistration2AdditionalDirty] = useState(false);

   const [textBlockRegistration3Dirty, setTextBlockRegistration3Dirty] = useState(false);
   const [textBlockRegistration3AdditionalDirty, setTextBlockRegistration3AdditionalDirty] = useState(false);

   const [textBlockRegistration4Dirty, setTextBlockRegistration4Dirty] = useState(false);
   const [textBlockRegistration4AdditionalDirty, setTextBlockRegistration4AdditionalDirty] = useState(false);

   const [textBlockRegistration5Dirty, setTextBlockRegistration5Dirty] = useState(false);
   const [textBlockRegistration5AdditionalDirty, setTextBlockRegistration5AdditionalDirty] = useState(false);

   const [textBlockRegistration6Dirty, setTextBlockRegistration6Dirty] = useState(false);
   const [textBlockRegistration6AdditionalDirty, setTextBlockRegistration6AdditionalDirty] = useState(false);

   const [textBlockRegistration7Dirty, setTextBlockRegistration7Dirty] = useState(false);
   const [textBlockRegistration7AdditionalDirty, setTextBlockRegistration7AdditionalDirty] = useState(false);

   const [textBlockRegistration8Dirty, setTextBlockRegistration8Dirty] = useState(false);
   const [textBlockRegistration8AdditionalDirty, setTextBlockRegistration8AdditionalDirty] = useState(false);

   const [textBlockRegistration9Dirty, setTextBlockRegistration9Dirty] = useState(false);
   const [textBlockRegistration9AdditionalDirty, setTextBlockRegistration9AdditionalDirty] = useState(false);

   const [textBlockRegistration10Dirty, setTextBlockRegistration10Dirty] = useState(false);
   const [textBlockRegistration10AdditionalDirty, setTextBlockRegistration10AdditionalDirty] = useState(false);

   const [textBlockRegistration11Dirty, setTextBlockRegistration11Dirty] = useState(false);
   const [textBlockRegistration11AdditionalDirty, setTextBlockRegistration11AdditionalDirty] = useState(false);

   const [textBlockRegistration12Dirty, setTextBlockRegistration12Dirty] = useState(false);
   const [textBlockRegistration12AdditionalDirty, setTextBlockRegistration12AdditionalDirty] = useState(false);

   const [textBlockRegistration13Dirty, setTextBlockRegistration13Dirty] = useState(false);
   const [textBlockRegistration13AdditionalDirty, setTextBlockRegistration13AdditionalDirty] = useState(false);

   const [textBlockRegistration14Dirty, setTextBlockRegistration14Dirty] = useState(false);
   const [textBlockRegistration14AdditionalDirty, setTextBlockRegistration14AdditionalDirty] = useState(false);

   const [mainColorDirty, setMainColorDirty] = useState(false);

   const errMessage = <FormattedMessage id="createLanding.err.errMessage" tagName="span" />;

   const [valuelinkStreamErr, setLinkStreamErr] = useState(errMessage);

   const [valueNameErr, setValueNameErr] = useState(errMessage);
   const [valueAdditionalNameErr, setValueAdditionalNameErr] = useState(errMessage);

   const [domainNameErr, setDomainNameErr] = useState(errMessage);

   const [textBlockContent1Err, setTextBlockContent1Err] = useState(errMessage);
   const [textBlockContent1AdditionalErr, setTextBlockContent1AdditionalErr] = useState(errMessage);

   const [textBlockContent2Err, setTextBlockContent2Err] = useState(errMessage);
   const [textBlockContent2AdditionalErr, setTextBlockContent2AdditionalErr] = useState(errMessage);

   const [textBlockAbout1Err, setTextBlockAbout1Err] = useState(errMessage);
   const [textBlockAbout1AdditionalErr, setTextBlockAbout1AdditionalErr] = useState(errMessage);

   const [textBlockAbout2Err, setTextBlockAbout2Err] = useState(errMessage);
   const [textBlockAbout2AdditionalErr, setTextBlockAbout2AdditionalErr] = useState(errMessage);

   const [textBlockAbout3Err, setTextBlockAbout3Err] = useState(errMessage);
   const [textBlockAbout3AdditionalErr, setTextBlockAbout3AdditionalErr] = useState(errMessage);

   const [textBlockOrganizer1Err, setTextBlockOrganizer1Err] = useState(errMessage);
   const [textBlockOrganizer1AdditionalErr, setTextBlockOrganizer1AdditionalErr] = useState(errMessage);

   const [textBlockOrganizer2Err, setTextBlockOrganizer2Err] = useState(errMessage);
   const [textBlockOrganizer2AdditionalErr, setTextBlockOrganizer2AdditionalErr] = useState(errMessage);

   const [textBlockOrganizer3Err, setTextBlockOrganizer3Err] = useState(errMessage);
   const [textBlockOrganizer3AdditionalErr, setTextBlockOrganizer3AdditionalErr] = useState(errMessage);

   const [textBlockButtons1Err, setTextBlockButtons1Err] = useState(errMessage);
   const [textBlockButtons1AdditionalErr, setTextBlockButtons1AdditionalErr] = useState(errMessage);

   const [textBlockButtons2Err, setTextBlockButtons2Err] = useState(errMessage);
   const [textBlockButtons2AdditionalErr, setTextBlockButtons2AdditionalErr] = useState(errMessage);

   const [textBlockButtons3Err, setTextBlockButtons3Err] = useState(errMessage);
   const [textBlockButtons3AdditionalErr, setTextBlockButtons3AdditionalErr] = useState(errMessage);

   const [textBlockButtons4Err, setTextBlockButtons4Err] = useState(errMessage);
   const [textBlockButtons4AdditionalErr, setTextBlockButtons4AdditionalErr] = useState(errMessage);

   const [textBlockButtons5Err, setTextBlockButtons5Err] = useState(errMessage);
   const [textBlockButtons5AdditionalErr, setTextBlockButtons5AdditionalErr] = useState(errMessage);

   const [textBlockRegistration1Err, setTextBlockRegistration1Err] = useState(errMessage);
   const [textBlockRegistration1AdditionalErr, setTextBlockRegistration1AdditionalErr] = useState(errMessage);

   const [textBlockRegistration2Err, setTextBlockRegistration2Err] = useState(errMessage);
   const [textBlockRegistration2AdditionalErr, setTextBlockRegistration2AdditionalErr] = useState(errMessage);

   const [textBlockRegistration3Err, setTextBlockRegistration3Err] = useState(errMessage);
   const [textBlockRegistration3AdditionalErr, setTextBlockRegistration3AdditionalErr] = useState(errMessage);

   const [textBlockRegistration4Err, setTextBlockRegistration4Err] = useState(errMessage);
   const [textBlockRegistration4AdditionalErr, setTextBlockRegistration4AdditionalErr] = useState(errMessage);

   const [textBlockRegistration5Err, setTextBlockRegistration5Err] = useState(errMessage);
   const [textBlockRegistration5AdditionalErr, setTextBlockRegistration5AdditionalErr] = useState(errMessage);

   const [textBlockRegistration6Err, setTextBlockRegistration6Err] = useState(errMessage);
   const [textBlockRegistration6AdditionalErr, setTextBlockRegistration6AdditionalErr] = useState(errMessage);

   const [textBlockRegistration7Err, setTextBlockRegistration7Err] = useState(errMessage);
   const [textBlockRegistration7AdditionalErr, setTextBlockRegistration7AdditionalErr] = useState(errMessage);

   const [textBlockRegistration8Err, setTextBlockRegistration8Err] = useState(errMessage);
   const [textBlockRegistration8AdditionalErr, setTextBlockRegistration8AdditionalErr] = useState(errMessage);

   const [textBlockRegistration9Err, setTextBlockRegistration9Err] = useState(errMessage);
   const [textBlockRegistration9AdditionalErr, setTextBlockRegistration9AdditionalErr] = useState(errMessage);

   const [textBlockRegistration10Err, setTextBlockRegistration10Err] = useState(errMessage);
   const [textBlockRegistration10AdditionalErr, setTextBlockRegistration10AdditionalErr] = useState(errMessage);

   const [textBlockRegistration11Err, setTextBlockRegistration11Err] = useState(errMessage);
   const [textBlockRegistration11AdditionalErr, setTextBlockRegistration11AdditionalErr] = useState(errMessage);

   const [textBlockRegistration12Err, setTextBlockRegistration12Err] = useState(errMessage);
   const [textBlockRegistration12AdditionalErr, setTextBlockRegistration12AdditionalErr] = useState(errMessage);

   const [textBlockRegistration13Err, setTextBlockRegistration13Err] = useState(errMessage);
   const [textBlockRegistration13AdditionalErr, setTextBlockRegistration13AdditionalErr] = useState(errMessage);

   const [textBlockRegistration14Err, setTextBlockRegistration14Err] = useState(errMessage);
   const [textBlockRegistration14AdditionalErr, setTextBlockRegistration14AdditionalErr] = useState(errMessage);

   const [mainColorErr, setMainColorErr] = useState(errMessage);

   //add photo 
   const [photoArrLandinglogo, setInputArrLandinglogo] = useState(['1']);
   const [photoArrOrganizerlogo, setInputArrOrganizerlogo] = useState(['1']);
   const [photoArrSponsorlogo, setInputArrSponsorlogo] = useState(['1']);
   const [photoArrPartnerlogo, setInputArrPartnerlogo] = useState(['1']);

   useEffect(() => {
      if (valueNameErr ||
         domainNameErr ||
         textBlockContent1Err ||
         textBlockContent2Err ||
         textBlockAbout1Err ||
         textBlockAbout2Err ||
         textBlockAbout3Err ||
         textBlockOrganizer1Err ||
         textBlockOrganizer2Err ||
         textBlockOrganizer3Err ||
         textBlockButtons1Err ||
         textBlockButtons2Err ||
         textBlockButtons3Err ||
         textBlockButtons4Err ||
         textBlockButtons5Err ||
         textBlockRegistration1Err ||
         textBlockRegistration2Err ||
         textBlockRegistration3Err ||
         textBlockRegistration4Err ||
         textBlockRegistration5Err ||
         textBlockRegistration6Err ||
         textBlockRegistration7Err ||
         textBlockRegistration8Err ||
         textBlockRegistration9Err ||
         textBlockRegistration10Err ||
         textBlockRegistration11Err ||
         textBlockRegistration12Err ||
         textBlockRegistration13Err ||
         textBlockRegistration14Err ||
         mainColorErr ||
         (selectLanguages.length > 0 ?
            (valueAdditionalNameErr ||
               textBlockContent1AdditionalErr ||
               textBlockContent2AdditionalErr ||
               textBlockAbout1AdditionalErr ||
               textBlockAbout2AdditionalErr ||
               textBlockAbout3AdditionalErr ||
               textBlockOrganizer1AdditionalErr ||
               textBlockOrganizer2AdditionalErr ||
               textBlockOrganizer3AdditionalErr ||
               textBlockButtons1AdditionalErr ||
               textBlockButtons2AdditionalErr ||
               textBlockButtons3AdditionalErr ||
               textBlockButtons4AdditionalErr ||
               textBlockButtons5AdditionalErr ||
               textBlockRegistration1AdditionalErr ||
               textBlockRegistration2AdditionalErr ||
               textBlockRegistration3AdditionalErr ||
               textBlockRegistration4AdditionalErr ||
               textBlockRegistration5AdditionalErr ||
               textBlockRegistration6AdditionalErr ||
               textBlockRegistration7AdditionalErr ||
               textBlockRegistration8AdditionalErr ||
               textBlockRegistration9AdditionalErr ||
               textBlockRegistration10AdditionalErr ||
               textBlockRegistration11AdditionalErr ||
               textBlockRegistration12AdditionalErr ||
               textBlockRegistration13AdditionalErr ||
               textBlockRegistration14AdditionalErr)
            : false) ||
         (stream?.title === 'Yes' ? (valuelinkStreamErr) : false)
      ) {
         setFormValid(false);
      } else {
         setFormValid(true);
      }

   }, [
      valueNameErr,
      valueAdditionalNameErr,
      domainNameErr,
      textBlockContent1Err,
      textBlockContent1AdditionalErr,
      textBlockContent2Err,
      textBlockContent2AdditionalErr,
      textBlockAbout1Err,
      textBlockAbout1AdditionalErr,
      textBlockAbout2Err,
      textBlockAbout2AdditionalErr,
      textBlockAbout3Err,
      textBlockAbout3AdditionalErr,
      textBlockOrganizer1Err,
      textBlockOrganizer1AdditionalErr,
      textBlockOrganizer2Err,
      textBlockOrganizer2AdditionalErr,
      textBlockOrganizer3Err,
      textBlockOrganizer3AdditionalErr,
      textBlockButtons1Err,
      textBlockButtons1AdditionalErr,
      textBlockButtons2Err,
      textBlockButtons2AdditionalErr,
      textBlockButtons3Err,
      textBlockButtons3AdditionalErr,
      textBlockButtons4Err,
      textBlockButtons4AdditionalErr,
      textBlockButtons5Err,
      textBlockButtons5AdditionalErr,
      textBlockRegistration1Err,
      textBlockRegistration1AdditionalErr,
      textBlockRegistration2Err,
      textBlockRegistration2AdditionalErr,
      textBlockRegistration3Err,
      textBlockRegistration3AdditionalErr,
      textBlockRegistration4Err,
      textBlockRegistration4AdditionalErr,
      textBlockRegistration5Err,
      textBlockRegistration5AdditionalErr,
      textBlockRegistration6Err,
      textBlockRegistration6AdditionalErr,
      textBlockRegistration7Err,
      textBlockRegistration7AdditionalErr,
      textBlockRegistration8Err,
      textBlockRegistration8AdditionalErr,
      textBlockRegistration9Err,
      textBlockRegistration9AdditionalErr,
      textBlockRegistration10Err,
      textBlockRegistration10AdditionalErr,
      textBlockRegistration11Err,
      textBlockRegistration11AdditionalErr,
      textBlockRegistration12Err,
      textBlockRegistration12AdditionalErr,
      textBlockRegistration13Err,
      textBlockRegistration13AdditionalErr,
      textBlockRegistration14Err,
      textBlockRegistration14AdditionalErr,
      mainColorErr,
      valuelinkStreamErr,
      selectLanguages,
      stream,
      textBlockRegistration14AdditionalDirty,
      textBlockRegistration13AdditionalDirty
   ])

   const blurHandler = (e) => {
      switch (e.target.name) {
         case 'requiredLanguageValueName':
            setValueNameDirty(true)
            break;

         case 'additionalLanguageValueName':
            setValueAdditionalNameDirty(true)
            break;

         case 'linkStream':
            setLinkStreamDirty(true)
            break;

         case 'domainName':
            setDomainNameDirty(true)
            break;

         case 'textBlockContent1':
            setTextBlockContent1Dirty(true)
            break;

         case 'additionalTextBlockContent1':
            setTextBlockContent1AdditionalDirty(true)
            break;

         case 'textBlockContent2':
            setTextBlockContent2Dirty(true)
            break;

         case 'additionalTextBlockContent2':
            setTextBlockContent2AdditionalDirty(true)
            break;

         case 'textBlockAbout1':
            setTextBlockAbout1Dirty(true)
            break;

         case 'additionalTextBlockAbout1':
            setTextBlockAbout1AdditionalDirty(true)
            break;

         case 'textBlockAbout2':
            setTextBlockAbout2Dirty(true)
            break;

         case 'additionalTextBlockAbout2':
            setTextBlockAbout2AdditionalDirty(true)
            break;

         case 'textBlockAbout3':
            setTextBlockAbout3Dirty(true)
            break;

         case 'additionalTextBlockAbout3':
            setTextBlockAbout3AdditionalDirty(true)
            break;

         case 'textBlockOrganizer1':
            setTextBlockOrganizer1Dirty(true)
            break;

         case 'additionalTextBlockOrganizer1':
            setTextBlockOrganizer1AdditionalDirty(true)
            break;

         case 'textBlockOrganizer2':
            setTextBlockOrganizer2Dirty(true)
            break;

         case 'additionalTextBlockOrganizer2':
            setTextBlockOrganizer2AdditionalDirty(true)
            break;

         case 'textBlockOrganizer3':
            setTextBlockOrganizer3Dirty(true)
            break;

         case 'additionalTextBlockOrganizer3':
            setTextBlockOrganizer3AdditionalDirty(true)
            break;

         case 'textBlockButtons1':
            setTextBlockButtons1Dirty(true)
            break;

         case 'additionalTextBlockButtons1':
            setTextBlockButtons1AdditionalDirty(true)
            break;

         case 'textBlockButtons2':
            setTextBlockButtons2Dirty(true)
            break;

         case 'additionalTextBlockButtons2':
            setTextBlockButtons2AdditionalDirty(true)
            break;

         case 'textBlockButtons3':
            setTextBlockButtons3Dirty(true)
            break;

         case 'additionalTextBlockButtons3':
            setTextBlockButtons3AdditionalDirty(true)
            break;

         case 'textBlockButtons4':
            setTextBlockButtons4Dirty(true)
            break;

         case 'additionalTextBlockButtons4':
            setTextBlockButtons4AdditionalDirty(true)
            break;

         case 'textBlockButtons5':
            setTextBlockButtons5Dirty(true)
            break;

         case 'additionalTextBlockButtons5':
            setTextBlockButtons5AdditionalDirty(true)
            break;

         case 'textBlockRegistration1':
            setTextBlockRegistration1Dirty(true)
            break;

         case 'additionalTextBlockRegistration1':
            setTextBlockRegistration1AdditionalDirty(true)
            break;

         case 'textBlockRegistration2':
            setTextBlockRegistration2Dirty(true)
            break;

         case 'additionalTextBlockRegistration3':
            setTextBlockRegistration3AdditionalDirty(true)
            break;

         case 'textBlockRegistration4':
            setTextBlockRegistration4Dirty(true)
            break;

         case 'additionalTextBlockRegistration4':
            setTextBlockRegistration4AdditionalDirty(true)
            break;

         case 'textBlockRegistration5':
            setTextBlockRegistration5Dirty(true)
            break;

         case 'additionalTextBlockRegistration5':
            setTextBlockRegistration5AdditionalDirty(true)
            break;

         case 'textBlockRegistration6':
            setTextBlockRegistration6Dirty(true)
            break;

         case 'additionalTextBlockRegistration6':
            setTextBlockRegistration6AdditionalDirty(true)
            break;

         case 'textBlockRegistration7':
            setTextBlockRegistration7Dirty(true)
            break;

         case 'additionalTextBlockRegistration7':
            setTextBlockRegistration7AdditionalDirty(true)
            break;

         case 'textBlockRegistration8':
            setTextBlockRegistration8Dirty(true)
            break;

         case 'additionalTextBlockRegistration8':
            setTextBlockRegistration8AdditionalDirty(true)
            break;

         case 'textBlockRegistration9':
            setTextBlockRegistration9Dirty(true)
            break;

         case 'additionalTextBlockRegistration9':
            setTextBlockRegistration9AdditionalDirty(true)
            break;

         case 'textBlockRegistration10':
            setTextBlockRegistration10Dirty(true)
            break;

         case 'additionalTextBlockRegistration10':
            setTextBlockRegistration10AdditionalDirty(true)
            break;

         case 'textBlockRegistration11':
            setTextBlockRegistration11Dirty(true)
            break;

         case 'additionalTextBlockRegistration11':
            setTextBlockRegistration11AdditionalDirty(true)
            break;

         case 'textBlockRegistration12':
            setTextBlockRegistration12Dirty(true)
            break;

         case 'additionalTextBlockRegistration12':
            setTextBlockRegistration12AdditionalDirty(true)
            break;

         case 'textBlockRegistration13':
            setTextBlockRegistration13Dirty(true)
            break;

         case 'additionalTextBlockRegistration13':
            setTextBlockRegistration13AdditionalDirty(true)
            break;

         case 'textBlockRegistration14':
            setTextBlockRegistration14Dirty(true)
            break;

         case 'additionalTextBlockRegistration14':
            setTextBlockRegistration14AdditionalDirty(true)
            break;

         case 'mainColor':
            setMainColorDirty(true)
            break;


         default:
            break;
      }
   }

   //валидация и изменение полей ввода
   const changeText = (value, fn, checkFn) => {
      fn(value);
      if (value.length < 2) {
         checkFn(<FormattedMessage id="createLanding.err.errMessageLong" tagName="span" />);
      } else {
         checkFn(false);
      }
   }
   const changeTextEmbed = (value, fn, checkFn) => {
      fn(value);
      if (value.length < 2) {
         checkFn(<FormattedMessage id="createLanding.err.errMessageLong" tagName="span" />);
      } else if (!(value.includes('www.youtube.com') || value.includes('www.twitch.tv'))) {
         checkFn(<FormattedMessage id="createLanding.err.errMessageOnlyYaT" tagName="span" />);
      } else {
         checkFn(false);
      }
   }
   const checkLengthValue = (value, checkFn) => {
      if (value < 2) {
         checkFn(<FormattedMessage id="createLanding.err.errMessageLong" tagName="span" />);
      } else {
         checkFn(false);
      }
   }
   const changeLanguagesValue = (val, id, elName, checkFn) => {
      selectLanguages.forEach(el => {
         if (el.id === id) {
            el[elName] = val;
            checkLengthValue(val.length, checkFn)
         }
         if (selectLanguages.length === 2) {
            checkLengthValue(el[elName].length, checkFn)
         }
      });

   }
   const changeDomainName = (value, fn) => {
      let regexp = /^[a-z0-9_-]+$/;
      if (!regexp.test(value)) {
         setDomainNameErr(<FormattedMessage id="createLanding.err.errMessageСharacters" tagName="span" />);
      } else {
         setDomainNameErr(false);
      }
      fn(value);
   }
   const chanegeMainColor = (value, fn, fnErr) => {
      let regexp = /^(\d{1,3}),(\d{1,3}),(\d{1,3})$/;
      if (!regexp.test(value)) {
         fnErr(<FormattedMessage id="createLanding.err.errMessageData" tagName="span" />);
      } else {
         fnErr(false);
      }
      fn(value)
   }

   const changeValueLanguages = (e) => {
      if (e.length >= MAX_LANGUAGES_COUND) {
         const value = selectLanguages.splice(0, MAX_LANGUAGES_COUND);
         setError(true);
         setTimeout(() => {
            setError(false);
         }, 2000)
         return setSelectLanguages(value);
      }

      setSelectLanguages(e);
      setError(false);
   }

   const getLanguages = () => {
      API.request({ ...API_ROUTER.landing.getLanguagesLanding })
         .then((res) => {
            let languagesArr = [];

            for (let key in res) {
               let newObj = {
                  id: languagesArr.length + 1,
                  name: key.toUpperCase(),
                  value: res[key],
                  textName: '',
                  textBlockContent1: '',
                  textBlockContent2: '',
                  textBlockAbout1: '',
                  textBlockAbout2: '',
                  textBlockAbout3: '',
                  textBlockOrganizer1: '',
                  textBlockOrganizer2: '',
                  textBlockOrganizer3: '',
                  textBlockButtons1: '',
                  textBlockButtons2: '',
                  textBlockButtons3: '',
                  textBlockButtons4: '',
                  textBlockButtons5: '',
                  textBlockRegistration1: '',
                  textBlockRegistration2: '',
                  textBlockRegistration3: '',
                  textBlockRegistration4: '',
                  textBlockRegistration5: '',
                  textBlockRegistration6: '',
                  textBlockRegistration7: '',
                  textBlockRegistration8: '',
                  textBlockRegistration9: '',
                  textBlockRegistration10: '',
                  textBlockRegistration11: '',
                  textBlockRegistration12: '',
                  textBlockRegistration13: '',
                  textBlockRegistration14: '',
               };

               languagesArr.push(newObj);
            }

            const filterArr = languagesArr.filter((el) => el.name !== REQUIRED_LANGUIGE_NAME);
            setLanguages(filterArr);
         })
         .catch((err) => console.log(err));
   }


   //Submit
   const makeArray = (totalLang, requiredLanguageValue, param) => {
      let result = [{
         [totalLang]: requiredLanguageValue
      }];

      selectLanguages.forEach(el => {
         result = [...result, { [el.name]: el[param] }];
      });
      return result;
   }

   const history = useHistory();
   function goToUrl(url) {
      history.push(url);
   }

   const handleSubmit = () => {
      let languages = ["en"]
      for (let key in selectLanguages) {
         languages.push(selectLanguages[key].name.toLowerCase())
      }

      API.request({
         ...API_ROUTER.landing.createLanding,
         data: {
            name: makeArray(REQUIRED_LANGUIGE_NAME, requiredLanguageValueName, 'textName'),
            domain: domainName,
            domainSelection: domainSelection,
            landingType: type.title,
            embedStream: linkStream,
            languages: languages,
            mainColor: mainColor,
            textBlockContent1: makeArray(REQUIRED_LANGUIGE_NAME, requiredLanguageValueContent1, 'textBlockContent1'),
            textBlockContent2: makeArray(REQUIRED_LANGUIGE_NAME, requiredLanguageValueContent2, 'textBlockContent2'),
            textBlockAbout1: makeArray(REQUIRED_LANGUIGE_NAME, requiredLanguageValueAbout1, 'textBlockAbout1'),
            textBlockAbout2: makeArray(REQUIRED_LANGUIGE_NAME, requiredLanguageValueAbout2, 'textBlockAbout2'),
            textBlockAbout3: makeArray(REQUIRED_LANGUIGE_NAME, requiredLanguageValueAbout3, 'textBlockAbout3'),
            textBlockOrganizer1: makeArray(REQUIRED_LANGUIGE_NAME, requiredLanguageValueOrganizer1, 'textBlockOrganizer1'),
            textBlockOrganizer2: makeArray(REQUIRED_LANGUIGE_NAME, requiredLanguageValueOrganizer2, 'textBlockOrganizer2'),
            textBlockOrganizer3: makeArray(REQUIRED_LANGUIGE_NAME, requiredLanguageValueOrganizer3, 'textBlockOrganizer3'),
            textBlockButtons1: makeArray(REQUIRED_LANGUIGE_NAME, requiredLanguageValueButtons1, 'textBlockButtons1'),
            textBlockButtons2: makeArray(REQUIRED_LANGUIGE_NAME, requiredLanguageValueButtons2, 'textBlockButtons2'),
            textBlockButtons3: makeArray(REQUIRED_LANGUIGE_NAME, requiredLanguageValueButtons3, 'textBlockButtons3'),
            textBlockButtons4: makeArray(REQUIRED_LANGUIGE_NAME, requiredLanguageValueButtons4, 'textBlockButtons4'),
            textBlockButtons5: makeArray(REQUIRED_LANGUIGE_NAME, requiredLanguageValueButtons5, 'textBlockButtons5'),
            textBlockRegistration1: makeArray(REQUIRED_LANGUIGE_NAME, requiredLanguageValueRegistration1, 'textBlockRegistration1'),
            textBlockRegistration2: makeArray(REQUIRED_LANGUIGE_NAME, requiredLanguageValueRegistration2, 'textBlockRegistration2'),
            textBlockRegistration3: makeArray(REQUIRED_LANGUIGE_NAME, requiredLanguageValueRegistration3, 'textBlockRegistration3'),
            textBlockRegistration4: makeArray(REQUIRED_LANGUIGE_NAME, requiredLanguageValueRegistration4, 'textBlockRegistration4'),
            textBlockRegistration5: makeArray(REQUIRED_LANGUIGE_NAME, requiredLanguageValueRegistration5, 'textBlockRegistration5'),
            textBlockRegistration6: makeArray(REQUIRED_LANGUIGE_NAME, requiredLanguageValueRegistration6, 'textBlockRegistration6'),
            textBlockRegistration7: makeArray(REQUIRED_LANGUIGE_NAME, requiredLanguageValueRegistration7, 'textBlockRegistration7'),
            textBlockRegistration8: makeArray(REQUIRED_LANGUIGE_NAME, requiredLanguageValueRegistration8, 'textBlockRegistration8'),
            textBlockRegistration9: makeArray(REQUIRED_LANGUIGE_NAME, requiredLanguageValueRegistration9, 'textBlockRegistration9'),
            textBlockRegistration10: makeArray(REQUIRED_LANGUIGE_NAME, requiredLanguageValueRegistration10, 'textBlockRegistration10'),
            textBlockRegistration11: makeArray(REQUIRED_LANGUIGE_NAME, requiredLanguageValueRegistration11, 'textBlockRegistration11'),
            textBlockRegistration12: makeArray(REQUIRED_LANGUIGE_NAME, requiredLanguageValueRegistration12, 'textBlockRegistration12'),
            textBlockRegistration13: makeArray(REQUIRED_LANGUIGE_NAME, requiredLanguageValueRegistration13, 'textBlockRegistration13'),
            textBlockRegistration14: makeArray(REQUIRED_LANGUIGE_NAME, requiredLanguageValueRegistration14, 'textBlockRegistration14'),
         }
      })
         .then((res) => {
            console.log(res.id);

            if (bannerImg.length > 0) {
               uploadData(bannerImg, res.id, 'landingPageHeaderBanner')
            }
            if (flag.length > 0) {
               uploadData(flag, res.id, 'landingFlag')
            }
            if (banner.length > 0) {
               uploadData(banner, res.id, 'landingBanner')
            }
            if (gameLogo.length > 0) {
               uploadData(gameLogo, res.id, 'landingGameLogo')
            }

            setTimeout(() => {
               if (photoArrLandinglogo.length > 0) {
                  uploadData(photoArrLandinglogo, res.id, 'landingLogo')
               }
            }, 0)//??????

            //
            setTimeout(() => {
               if (photoArrOrganizerlogo != '1') {
                  photoArrOrganizerlogo.map(el => uploadData(el, res.id, 'landingOrganizePartnerLogo'));
               }
            }, 2000)
            setTimeout(() => {
               if (photoArrSponsorlogo != '1') {
                  photoArrSponsorlogo.map(el => uploadData(el, res.id, 'landingSponsorLogo'));
               }
            }, 3000)
            setTimeout(() => {
               if (photoArrPartnerlogo != '1') {
                  photoArrPartnerlogo.map(el => uploadData(el, res.id, 'landingPartnerLogo'));
               }
            }, 4000)

            setTimeout(() => {
               goToUrl(ROUTER.landings);
               alert(ServerAnswerSuccess);
            }, 5000)
         })
         .catch((err) => {
            console.log(err);
            //alert(ServerAnswerErr);
            for (let key in err.data.errors) {
               alert(`${key}: ${err.data.errors[key]}`)
            }
         });

   }


   useEffect(() => {
      getLanguages();
   }, [])

   return (
      <div>
         <div className={s.title}>
            <FormattedMessage id="createLanding.title.pageName" tagName="span" />
         </div>

         <div className={s.selectContainer}>
            <div className={s.text}>
               <FormattedMessage id="createLanding.title.type" tagName="span" />
            </div>
            <div className={s.select}>
               <Select
                  classNamePrefix='custom_select'
                  options={LANDING_TYPES}
                  getOptionLabel={(option) => option.title}
                  getOptionValue={(option) => option.id}
                  name="type"
                  isMulti={false}
                  placeholder={typePlaceholder}
                  onChange={setType}
               />
            </div>
         </div>
         {/* Add language */}
         <div className={s.selectContainer}>
            <div className={s.text}>
               <FormattedMessage id="createLanding.title.language" tagName="span" />
            </div>
            <div className={error ? s.selectErr : ''}>
               {error && <span className={s.messageErr}>
                  <FormattedMessage id="createLanding.err.titleErr" tagName="span" />
               </span>}
               <div className={s.select}>
                  <Select
                     classNamePrefix='custom_select'
                     options={languages}
                     placeholder={languagePlaceholder}
                     isMulti={true}
                     name='language'
                     value={selectLanguages}
                     getOptionLabel={(option) => option.value}
                     getOptionValue={(option) => option.name}
                     onChange={changeValueLanguages}
                  />
               </div>
            </div>
         </div>

         <div className={s.languageContainer}>
            <div>
               <div className={s.inputContainer}>
                  <div className={s.titleInput}>
                     <FormattedMessage id="createLanding.title.landingName" tagName="span" />{" " + "EN*"}
                  </div>

                  {(valueNameDirty && valueNameErr) && <div className={s.errMess}>{valueNameErr}</div>}

                  <input
                     className={(valueNameDirty && valueNameErr) ? s.inputErr : false}
                     type="text"
                     name="requiredLanguageValueName"
                     onBlur={(e) => blurHandler(e)}
                     placeholder={landingNamesPlaceholder}
                     value={requiredLanguageValueName}
                     onChange={(e) => changeText(e.target.value, setRequiredLanguageValueName, setValueNameErr)}
                  />

               </div>
            </div>
            {selectLanguages.map((el, i) => <div>
               <div className={s.inputContainer}>
                  <div className={s.titleInput}>
                     <FormattedMessage id="createLanding.title.landingName" tagName="span" />{" " + el.name + "*"}
                  </div>
                  {(valueAdditionalNameDirty && valueAdditionalNameErr || el.textName.length < 2) && <div className={s.errMess}>{valueAdditionalNameErr}</div>}
                  <input
                     className={(valueAdditionalNameDirty && valueAdditionalNameErr || el.textName.length < 2) ? s.inputErr : false}
                     type="text"
                     name="additionalLanguageValueName"
                     onBlur={(e) => blurHandler(e)}
                     placeholder={landingNamesPlaceholder}
                     defaultValue={el.textName}
                     onChange={(e) => changeLanguagesValue(e.target.value, el.id, 'textName', setValueAdditionalNameErr)}
                  />
               </div>
            </div>)}
         </div>

         <div className={s.imageContainer}>
            <div className={s.imgTitle}>
               <FormattedMessage id="createLanding.title.uploadBanner" tagName="span" />
            </div>

            <div className={s.btnContainer}>
               <FileUploaderSingle
                  defaultFoto={uploadImg}
                  setImageURL={setBannerImg}
                  imageURL={bannerImg}
                  htmlFor={'bannerImg'}
               />
            </div>
         </div>

         <div className={s.imageContainer}>
            <div className={s.imgTitle}>
               <FormattedMessage id="createLanding.title.landingLogo" tagName="span" />
            </div>
            {photoArrLandinglogo.map((el, i) => <div>

               <div key={i} className={s.btnContainer}>
                  <div
                     className={s.delBtn}
                     onClick={() => delPhoto(i, setInputArrLandinglogo, photoArrLandinglogo)}
                  ></div>
                  <FileUploaderSingle
                     defaultFoto={uploadImg}
                     imageURL={photoArrLandinglogo[i]}
                     htmlFor={`landingLogo${i}`}
                     isMany={true}
                     onChangeDudlePhotos={onChangeDudlePhotos}
                     id={i}
                     fn={setInputArrLandinglogo}
                     data={photoArrLandinglogo}
                  />
               </div>

            </div>)}

            <div className={s.addBtnContainer}>
               <button
                  className={s.addBtn}
                  onClick={() => addPhotos(photoArrLandinglogo, setInputArrLandinglogo)}>
                  <FormattedMessage id="createLanding.btn.addLandingLogo" tagName="span" />
               </button>
            </div>
         </div>

         <div className={s.imageContainer}>
            <div className={s.imgTitle}>
               <FormattedMessage id="createLanding.title.organizerLogo" tagName="span" />
            </div>
            {photoArrOrganizerlogo.map((el, i) => <div>

               <div key={i} className={s.btnContainer}>
                  <div
                     className={s.delBtn}
                     onClick={() => delPhoto(i, setInputArrOrganizerlogo, photoArrOrganizerlogo)}
                  ></div>
                  <FileUploaderSingle
                     defaultFoto={uploadImg}
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
               <FormattedMessage id="createLanding.btn.addOrganizerLogo" tagName="span" />
            </button>
         </div>

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
                     defaultFoto={uploadImg}
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
               <FormattedMessage id="createLanding.title.partnersLogo" tagName="span" />
            </div>
            {photoArrPartnerlogo.map((el, i) => <div>

               <div key={i} className={s.btnContainer}>
                  <div
                     className={s.delBtn}
                     onClick={() => delPhoto(i, setInputArrPartnerlogo, photoArrPartnerlogo)}
                  ></div>
                  <FileUploaderSingle
                     defaultFoto={uploadImg}
                     imageURL={photoArrPartnerlogo[i]}
                     htmlFor={`partners${i}`}
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
                  <FormattedMessage id="createLanding.title.partnersLogo" tagName="span" />
               </button>
            </div>
         </div>

         <div className={s.selectContainer}>
            <div className={s.text}>
               <FormattedMessage id="createLanding.title.stream" tagName="span" />
            </div>
            <div className={s.select}>
               <Select
                  classNamePrefix='custom_select'
                  options={STREAM}
                  getOptionLabel={(option) => option.title}
                  getOptionValue={(option) => option.id}
                  name="stream"
                  isMulti={false}
                  placeholder={typePlaceholder}
                  onChange={setStream}
               />
            </div>
         </div>

         {stream.title === 'Yes' && <div className={s.flexContainer}>
            <div className={s.inputContainer}>
               <div className={s.titleInput}>
                  <FormattedMessage id="createLanding.title.linkStream" tagName="span" />
               </div>

               {(valuelinkStreamDirty && valuelinkStreamErr) && <div className={s.errMess}>{valuelinkStreamErr}</div>}

               <input
                  className={(valuelinkStreamDirty && valuelinkStreamErr) ? s.inputErr : false}
                  type="text"
                  name="linkStream"
                  onBlur={(e) => blurHandler(e)}
                  placeholder={landingLinkPlaceholder}
                  value={linkStream}
                  onChange={(e) => changeTextEmbed(e.target.value, setLinkStream, setLinkStreamErr)}
               />

            </div>
         </div>}

         <div className={s.inputContainer}>
            <div className={s.titleInput}>
               <FormattedMessage id="createLanding.title.domainName" tagName="span" />
            </div>

            {(domainNameDirty && domainNameErr) && <div className={s.errMess}>{domainNameErr}</div>}

            <input
               className={(domainNameDirty && domainNameErr) ? s.inputErr : false}
               type="text"
               name="domainName"
               onBlur={(e) => blurHandler(e)}
               placeholder={landingDomainNamePlaceholder}
               value={domainName}
               onChange={(e) => changeDomainName((e.target.value).trim().toLocaleLowerCase(), setDomainName)}

            />

            {domainName && <div className={s.choiceContainer}>
               <div className={s.titleInput}>
                  <FormattedMessage id="createLanding.message.p1" tagName="span" />
               </div>

               <div className={s.columnContainer}>

                  <div
                     onClick={() => setDomainSelection('free')}
                     className={domainSelection === 'free' ? `${s.titleInput} ${s.active}` : `${s.titleInput}`}
                  >
                     <div>passport.gg/<span>{domainName}</span></div>
                  </div>
                  <div className={s.titleInput} style={{ color: 'green' }}>
                     <FormattedMessage id="createLanding.domainName.typeFree" tagName="span" />
                  </div>

                  <div
                     onClick={() => setDomainSelection('premium')}
                     className={domainSelection === 'premium' ? `${s.titleInput} ${s.active}` : `${s.titleInput}`}>
                     <div><span>{domainName}</span>.passport.gg</div>
                  </div>
                  <div className={s.titleInput} style={{ color: "red" }}>
                     <FormattedMessage id="createLanding.domainName.typePremium" tagName="span" />
                  </div>
                  {domainSelection === 'premium' && <div className={s.titleInput}>
                     <FormattedMessage id="Extra charge applies" tagName="span" />
                  </div>}
               </div>

            </div>}

         </div>

         <div className={s.imageContainer}>
            <div className={s.imgTitle}>
               <FormattedMessage id="createLanding.title.flag" tagName="span" />
            </div>

            <div className={s.btnContainer}>
               <FileUploaderSingle
                  defaultFoto={uploadImg}
                  setImageURL={setFlag}
                  imageURL={flag}
                  htmlFor={'flag'}
               />
            </div>
         </div>

         <div className={s.text}>
            <FormattedMessage id="createLanding.title.content" tagName="h1" />
         </div>
         <div className={s.titleContent}>
            <div>
               <div className={s.titleInput}>
                  <FormattedMessage id="createLanding.title.textBlockContent1" tagName="span" /> {" " + "EN*"}
               </div>

               {(textBlockContent1Dirty && textBlockContent1Err) && <div className={s.errMess}>{textBlockContent1Err}</div>}

               <textarea
                  className={(textBlockContent1Dirty && textBlockContent1Err) ? `${s.textarea} ${s.textareaErr}` : `${s.textarea}`}
                  value={requiredLanguageValueContent1}
                  onChange={(e) => changeText(e.target.value, setRequiredLanguageValueContent1, setTextBlockContent1Err)}
                  name="textBlockContent1"
                  onBlur={(e) => blurHandler(e)}
               />
            </div>

            {selectLanguages.map((el, i) => <div className={s.secondTextContainer}>
               <div className={s.titleInput}>
                  <FormattedMessage id="createLanding.title.textBlockContent1" tagName="span" /> {" " + el.name + "*"}
               </div>

               {(textBlockContent1AdditionalDirty && textBlockContent1AdditionalErr || el.textBlockContent1.length < 2) && <div className={s.errMess}>{textBlockContent1AdditionalErr}</div>}

               <textarea
                  className={(textBlockContent1AdditionalDirty && textBlockContent1AdditionalErr || el.textBlockContent1.length < 2) ? `${s.textarea} ${s.textareaErr}` : `${s.textarea}`}
                  defaultValue={el.textBlockContent1}
                  onChange={(e) => changeLanguagesValue(e.target.value, el.id, 'textBlockContent1', setTextBlockContent1AdditionalErr)}
                  name="additionalTextBlockContent1"
                  onBlur={(e) => blurHandler(e)}
               />
            </div>
            )}
         </div>

         <div className={s.titleContent}>
            <div>
               <div className={s.titleInput}>
                  <FormattedMessage id="createLanding.title.textBlockContent2" tagName="span" /> {" " + "EN*"}
               </div>

               {(textBlockContent2Dirty && textBlockContent2Err) && <div className={s.errMess}>{textBlockContent2Err}</div>}

               <textarea
                  className={(textBlockContent2Dirty && textBlockContent2Err) ? `${s.textarea} ${s.textareaErr}` : `${s.textarea}`}
                  value={requiredLanguageValueContent2}
                  onChange={(e) => changeText(e.target.value, setRequiredLanguageValueContent2, setTextBlockContent2Err)}
                  name="textBlockContent2"
                  onBlur={(e) => blurHandler(e)}
               />
            </div>

            {selectLanguages.map((el, i) => <div className={s.secondTextContainer}>
               <div className={s.titleInput}>
                  <FormattedMessage id="createLanding.title.textBlockContent2" tagName="span" /> {" " + el.name + "*"}
               </div>

               {(textBlockContent2AdditionalDirty && textBlockContent2AdditionalErr || el.textBlockContent2.length < 2) && <div className={s.errMess}>{textBlockContent2AdditionalErr}</div>}

               <textarea
                  className={(textBlockContent2AdditionalDirty && textBlockContent2AdditionalErr || el.textBlockContent2.length < 2) ? `${s.textarea} ${s.textareaErr}` : `${s.textarea}`}
                  defaultValue={el.textBlockContent2}
                  onChange={(e) => changeLanguagesValue(e.target.value, el.id, 'textBlockContent2', setTextBlockContent2AdditionalErr)}
                  name="additionalTextBlockContent2"
                  onBlur={(e) => blurHandler(e)}
               />
            </div>
            )}
         </div>

         <div className={s.imageContainer}>
            <div className={s.imgTitle}>
               <FormattedMessage id="createLanding.title.addBanner" tagName="span" />
            </div>

            <div className={s.btnContainer}>
               <FileUploaderSingle
                  defaultFoto={uploadImg}
                  setImageURL={setBanner}
                  imageURL={banner}
                  htmlFor={'banner'}
               />
            </div>
         </div>

         <div className={s.text}>
            <FormattedMessage id="createLanding.title.about" tagName="h1" />
         </div>
         <div className={s.titleContent}>
            <div>
               <div className={s.titleInput}>
                  <FormattedMessage id="createLanding.title.textBlockAbout1" tagName="span" /> {" " + "EN*"}
               </div>

               {(textBlockAbout1Dirty && textBlockAbout1Err) && <div className={s.errMess}>{textBlockAbout1Err}</div>}

               <textarea
                  className={(textBlockAbout1Dirty && textBlockAbout1Err) ? `${s.textarea} ${s.textareaErr}` : `${s.textarea}`}
                  value={requiredLanguageValueAbout1}
                  onChange={(e) => changeText(e.target.value, setRequiredLanguageValueAbout1, setTextBlockAbout1Err)}
                  name="textBlockAbout1"
                  onBlur={(e) => blurHandler(e)}
               />
            </div>

            {selectLanguages.map((el, i) => <div className={s.secondTextContainer}>
               <div className={s.titleInput}>
                  <FormattedMessage id="createLanding.title.textBlockAbout1" tagName="span" /> {" " + el.name + "*"}
               </div>

               {(textBlockAbout1AdditionalDirty && textBlockAbout1AdditionalErr || el.textBlockAbout1.length < 2) && <div className={s.errMess}>{textBlockAbout1AdditionalErr}</div>}

               <textarea
                  className={(textBlockAbout1AdditionalDirty && textBlockAbout1AdditionalErr || el.textBlockAbout1.length < 2) ? `${s.textarea} ${s.textareaErr}` : `${s.textarea}`}
                  defaultValue={el.textBlockAbout1}
                  onChange={(e) => changeLanguagesValue(e.target.value, el.id, 'textBlockAbout1', setTextBlockAbout1AdditionalErr)}
                  name="additionalTextBlockAbout1"
                  onBlur={(e) => blurHandler(e)}
               />
            </div>
            )}
         </div>

         <div className={s.titleContent}>
            <div>
               <div className={s.titleInput}>
                  <FormattedMessage id="createLanding.title.textBlockAbout2" tagName="span" /> {" " + "EN*"}
               </div>

               {(textBlockAbout2Dirty && textBlockAbout2Err) && <div className={s.errMess}>{textBlockAbout2Err}</div>}

               <textarea
                  className={(textBlockAbout2Dirty && textBlockAbout2Err) ? `${s.textarea} ${s.textareaErr}` : `${s.textarea}`}
                  value={requiredLanguageValueAbout2}
                  onChange={(e) => changeText(e.target.value, setRequiredLanguageValueAbout2, setTextBlockAbout2Err)}
                  name="textBlockAbout2"
                  onBlur={(e) => blurHandler(e)}
               />
            </div>

            {selectLanguages.map((el, i) => <div className={s.secondTextContainer}>
               <div className={s.titleInput}>
                  <FormattedMessage id="createLanding.title.textBlockAbout2" tagName="span" /> {" " + el.name + "*"}
               </div>

               {(textBlockAbout2AdditionalDirty && textBlockAbout2AdditionalErr || el.textBlockAbout2.length < 2) && <div className={s.errMess}>{textBlockAbout2AdditionalErr}</div>}

               <textarea
                  className={(textBlockAbout2AdditionalDirty && textBlockAbout2AdditionalErr || el.textBlockAbout2.length < 2) ? `${s.textarea} ${s.textareaErr}` : `${s.textarea}`}
                  defaultValue={el.textBlockAbout2}
                  onChange={(e) => changeLanguagesValue(e.target.value, el.id, 'textBlockAbout2', setTextBlockAbout2AdditionalErr)}
                  name="additionalTextBlockAbout2"
                  onBlur={(e) => blurHandler(e)}
               />
            </div>
            )}
         </div>

         <div className={s.titleContent}>
            <div>
               <div className={s.titleInput}>
                  <FormattedMessage id="createLanding.title.textBlockAbout3" tagName="span" /> {" " + "EN*"}
               </div>

               {(textBlockAbout3Dirty && textBlockAbout3Err) && <div className={s.errMess}>{textBlockAbout3Err}</div>}

               <textarea
                  className={(textBlockAbout3Dirty && textBlockAbout3Err) ? `${s.textarea} ${s.textareaErr}` : `${s.textarea}`}
                  value={requiredLanguageValueAbout3}
                  onChange={(e) => changeText(e.target.value, setRequiredLanguageValueAbout3, setTextBlockAbout3Err)}
                  name="textBlockAbout3"
                  onBlur={(e) => blurHandler(e)}
               />
            </div>

            {selectLanguages.map((el, i) => <div className={s.secondTextContainer}>
               <div className={s.titleInput}>
                  <FormattedMessage id="createLanding.title.textBlockAbout3" tagName="span" /> {" " + el.name + "*"}
               </div>

               {(textBlockAbout3AdditionalDirty && textBlockAbout3AdditionalErr || el.textBlockAbout3.length < 2) && <div className={s.errMess}>{textBlockAbout3AdditionalErr}</div>}

               <textarea
                  className={(textBlockAbout3AdditionalDirty && textBlockAbout3AdditionalErr || el.textBlockAbout3.length < 2) ? `${s.textarea} ${s.textareaErr}` : `${s.textarea}`}
                  defaultValue={el.textBlockAbout3}
                  onChange={(e) => changeLanguagesValue(e.target.value, el.id, 'textBlockAbout3', setTextBlockAbout3AdditionalErr)}
                  name="additionalTextBlockAbout3"
                  onBlur={(e) => blurHandler(e)}
               />
            </div>
            )}
         </div>

         <div className={s.imageContainer}>
            <div className={s.imgTitle}>
               <FormattedMessage id="createLanding.title.gameLogo" tagName="span" />
            </div>

            <div className={s.btnContainer}>
               <FileUploaderSingle
                  defaultFoto={uploadImg}
                  setImageURL={setGameLogo}
                  imageURL={gameLogo}
                  htmlFor={'gameLogo'}
               />
            </div>
         </div>

         <div className={s.text}>
            <FormattedMessage id="createLanding.title.color" tagName="span" />
         </div>

         <div className={s.colorMenuContainer}>
            <div className={s.colorContainer}>
               <div
                  className={mainColor === '192,21,17' ? `${s.colorItem} ${s.darkRed} ${s.active}` : `${s.colorItem} ${s.darkRed}`}
                  onClick={() => chanegeMainColor('192,21,17', setMainColor, setMainColorErr)}
               ></div>
               <div
                  className={mainColor === '254,0,23' ? `${s.colorItem} ${s.red} ${s.active}` : `${s.colorItem} ${s.red}`}
                  onClick={() => chanegeMainColor('254,0,23', setMainColor, setMainColorErr)}
               ></div>
               <div
                  className={mainColor === '255,193,19' ? `${s.colorItem} ${s.orange} ${s.active}` : `${s.colorItem} ${s.orange}`}
                  onClick={() => chanegeMainColor('255,193,19', setMainColor, setMainColorErr)}
               ></div>
               <div
                  className={mainColor === '254,255,17' ? `${s.colorItem} ${s.yellow} ${s.active}` : `${s.colorItem} ${s.yellow}`}
                  onClick={() => chanegeMainColor('254,255,17', setMainColor, setMainColorErr)}
               ></div>
               <div
                  className={mainColor === '145,209,79' ? `${s.colorItem} ${s.green} ${s.active}` : `${s.colorItem} ${s.green}`}
                  onClick={() => chanegeMainColor('145,209,79', setMainColor, setMainColorErr)}
               ></div>
               <div
                  className={mainColor === '23,176,80' ? `${s.colorItem} ${s.darkGreen} ${s.active}` : `${s.colorItem} ${s.darkGreen}`}
                  onClick={() => chanegeMainColor('23,176,80', setMainColor, setMainColorErr)}
               ></div>
               <div
                  className={mainColor === '22,176,240' ? `${s.colorItem} ${s.lightBlue} ${s.active}` : `${s.colorItem} ${s.lightBlue}`}
                  onClick={() => chanegeMainColor('22,176,240', setMainColor, setMainColorErr)}
               ></div>
               <div
                  className={mainColor === '10,111,192' ? `${s.colorItem} ${s.blue} ${s.active}` : `${s.colorItem} ${s.blue}`}
                  onClick={() => chanegeMainColor('10,111,192', setMainColor, setMainColorErr)}
               ></div>
               <div
                  className={mainColor === '6,32,96' ? `${s.colorItem} ${s.darkBlue} ${s.active}` : `${s.colorItem} ${s.darkBlue}`}
                  onClick={() => chanegeMainColor('6,32,96', setMainColor, setMainColorErr)}
               ></div>
               <div
                  className={mainColor === '112,47,161' ? `${s.colorItem} ${s.lilac} ${s.active}` : `${s.colorItem} ${s.lilac}`}
                  onClick={() => chanegeMainColor('112,47,161', setMainColor, setMainColorErr)}
               ></div>
            </div>
         </div>
         <div className={s.inputContainer}>

            {(mainColorDirty && mainColorErr) && <div className={s.errMess}>{mainColorErr}</div>}

            <input
               className={(mainColorDirty && mainColorErr) ? s.inputErr : false}
               name={"mainColor"}
               type="text"
               value={mainColor}
               onChange={(e) => chanegeMainColor(e.target.value, setMainColor, setMainColorErr)}
               onBlur={(e) => blurHandler(e)}
            />

         </div>

         <div className={s.text}>
            <FormattedMessage id="createLanding.title.organizer" tagName="h1" />
         </div>
         <div className={s.titleContent}>
            <div>
               <div className={s.titleInput}>
                  <FormattedMessage id="createLanding.title.textBlockOrganizer1" tagName="span" /> {" " + "EN*"}
               </div>

               {(textBlockOrganizer1Dirty && textBlockOrganizer1Err) && <div className={s.errMess}>{textBlockOrganizer1Err}</div>}

               <textarea
                  className={(textBlockOrganizer1Dirty && textBlockOrganizer1Err) ? `${s.textarea} ${s.textareaErr}` : `${s.textarea}`}
                  value={requiredLanguageValueOrganizer1}
                  onChange={(e) => changeText(e.target.value, setRequiredLanguageValueOrganizer1, setTextBlockOrganizer1Err)}
                  name="textBlockOrganizer1"
                  onBlur={(e) => blurHandler(e)}
               />
            </div>

            {selectLanguages.map((el, i) => <div className={s.secondTextContainer}>
               <div className={s.titleInput}>
                  <FormattedMessage id="createLanding.title.textBlockOrganizer1" tagName="span" /> {" " + el.name + "*"}
               </div>

               {(textBlockOrganizer1AdditionalDirty && textBlockOrganizer1AdditionalErr || el.textBlockOrganizer1.length < 2) && <div className={s.errMess}>{textBlockOrganizer1AdditionalErr}</div>}

               <textarea
                  className={(textBlockOrganizer1AdditionalDirty && textBlockOrganizer1AdditionalErr || el.textBlockOrganizer1.length < 2) ? `${s.textarea} ${s.textareaErr}` : `${s.textarea}`}
                  defaultValue={el.textBlockOrganizer1}
                  onChange={(e) => changeLanguagesValue(e.target.value, el.id, 'textBlockOrganizer1', setTextBlockOrganizer1AdditionalErr)}
                  name="additionalTextBlockOrganizer1"
                  onBlur={(e) => blurHandler(e)}
               />
            </div>
            )}
         </div>

         <div className={s.titleContent}>
            <div>
               <div className={s.titleInput}>
                  <FormattedMessage id="createLanding.title.textBlockOrganizer2" tagName="span" /> {" " + "EN*"}
               </div>

               {(textBlockOrganizer2Dirty && textBlockOrganizer2Err) && <div className={s.errMess}>{textBlockOrganizer2Err}</div>}

               <textarea
                  className={(textBlockOrganizer2Dirty && textBlockOrganizer2Err) ? `${s.textarea} ${s.textareaErr}` : `${s.textarea}`}
                  value={requiredLanguageValueOrganizer2}
                  onChange={(e) => changeText(e.target.value, setRequiredLanguageValueOrganizer2, setTextBlockOrganizer2Err)}
                  name="textBlockOrganizer2"
                  onBlur={(e) => blurHandler(e)}
               />
            </div>

            {selectLanguages.map((el, i) => <div className={s.secondTextContainer}>
               <div className={s.titleInput}>
                  <FormattedMessage id="createLanding.title.textBlockOrganizer2" tagName="span" /> {" " + el.name + "*"}
               </div>

               {(textBlockOrganizer2AdditionalDirty && textBlockOrganizer2AdditionalErr || el.textBlockOrganizer2.length < 2) && <div className={s.errMess}>{textBlockOrganizer2AdditionalErr}</div>}

               <textarea
                  className={(textBlockOrganizer2AdditionalDirty && textBlockOrganizer2AdditionalErr || el.textBlockOrganizer2.length < 2) ? `${s.textarea} ${s.textareaErr}` : `${s.textarea}`}
                  defaultValue={el.textBlockOrganizer2}
                  onChange={(e) => changeLanguagesValue(e.target.value, el.id, 'textBlockOrganizer2', setTextBlockOrganizer2AdditionalErr)}
                  name="additionalTextBlockOrganizer2"
                  onBlur={(e) => blurHandler(e)}
               />
            </div>
            )}
         </div>

         <div className={s.titleContent}>
            <div>
               <div className={s.titleInput}>
                  <FormattedMessage id="createLanding.title.textBlockOrganizer3" tagName="span" /> {" " + "EN*"}
               </div>

               {(textBlockOrganizer3Dirty && textBlockOrganizer3Err) && <div className={s.errMess}>{textBlockOrganizer3Err}</div>}

               <textarea
                  className={(textBlockOrganizer3Dirty && textBlockOrganizer3Err) ? `${s.textarea} ${s.textareaErr}` : `${s.textarea}`}
                  value={requiredLanguageValueOrganizer3}
                  onChange={(e) => changeText(e.target.value, setRequiredLanguageValueOrganizer3, setTextBlockOrganizer3Err)}
                  name="textBlockOrganizer3"
                  onBlur={(e) => blurHandler(e)}
               />
            </div>

            {selectLanguages.map((el, i) => <div className={s.secondTextContainer}>
               <div className={s.titleInput}>
                  <FormattedMessage id="createLanding.title.textBlockOrganizer3" tagName="span" /> {" " + el.name + "*"}
               </div>

               {(textBlockOrganizer3AdditionalDirty && textBlockOrganizer3AdditionalErr || el.textBlockOrganizer3.length < 2) && <div className={s.errMess}>{textBlockOrganizer3AdditionalErr}</div>}

               <textarea
                  className={(textBlockOrganizer3AdditionalDirty && textBlockOrganizer3AdditionalErr || el.textBlockOrganizer3.length < 2) ? `${s.textarea} ${s.textareaErr}` : `${s.textarea}`}
                  defaultValue={el.textBlockOrganizer3}
                  onChange={(e) => changeLanguagesValue(e.target.value, el.id, 'textBlockOrganizer3', setTextBlockOrganizer3AdditionalErr)}
                  name="additionalTextBlockOrganizer3"
                  onBlur={(e) => blurHandler(e)}
               />
            </div>
            )}
         </div>

         <div className={s.text}>
            <FormattedMessage id="createLanding.title.buttons" tagName="h1" />
         </div>

         <div className={s.languageContainer}>
            <div>
               <div className={s.inputContainer}>
                  <div className={s.titleInput}>
                     <FormattedMessage id="createLanding.title.buttons1" tagName="span" />{" " + "EN*"}
                  </div>

                  {(textBlockButtons1Dirty && textBlockButtons1Err) && <div className={s.errMess}>{textBlockButtons1Err}</div>}

                  <input
                     className={(textBlockButtons1Dirty && textBlockButtons1Err) ? s.inputErr : false}
                     type="text"
                     name="textBlockButtons1"
                     onBlur={(e) => blurHandler(e)}
                     value={requiredLanguageValueButtons1}
                     onChange={(e) => changeText(e.target.value, setRequiredLanguageValueButtons1, setTextBlockButtons1Err)}
                  />

               </div>
            </div>
            {selectLanguages.map((el, i) => <div>
               <div className={s.inputContainer}>
                  <div className={s.titleInput}>
                     <FormattedMessage id="createLanding.title.buttons1" tagName="span" />{" " + el.name + "*"}
                  </div>
                  {(textBlockButtons1AdditionalDirty && textBlockButtons1AdditionalErr || el.textBlockButtons1.length < 2) && <div className={s.errMess}>{textBlockButtons1AdditionalErr}</div>}
                  <input
                     className={(textBlockButtons1AdditionalDirty && textBlockButtons1AdditionalErr || el.textBlockButtons1.length < 2) ? s.inputErr : false}
                     type="text"
                     name="requiredLanguageValueButtons1"
                     onBlur={(e) => blurHandler(e)}
                     defaultValue={el.textBlockButtons1}
                     onChange={(e) => changeLanguagesValue(e.target.value, el.id, 'textBlockButtons1', setTextBlockButtons1AdditionalErr)}
                  />
               </div>
            </div>)}
         </div>

         <div className={s.languageContainer}>
            <div>
               <div className={s.inputContainer}>
                  <div className={s.titleInput}>
                     <FormattedMessage id="createLanding.title.buttons2" tagName="span" />{" " + "EN*"}
                  </div>

                  {(textBlockButtons2Dirty && textBlockButtons2Err) && <div className={s.errMess}>{textBlockButtons2Err}</div>}

                  <input
                     className={(textBlockButtons2Dirty && textBlockButtons2Err) ? s.inputErr : false}
                     type="text"
                     name="textBlockButtons2"
                     onBlur={(e) => blurHandler(e)}
                     value={requiredLanguageValueButtons2}
                     onChange={(e) => changeText(e.target.value, setRequiredLanguageValueButtons2, setTextBlockButtons2Err)}
                  />

               </div>
            </div>
            {selectLanguages.map((el, i) => <div>
               <div className={s.inputContainer}>
                  <div className={s.titleInput}>
                     <FormattedMessage id="createLanding.title.buttons2" tagName="span" />{" " + el.name + "*"}
                  </div>
                  {(textBlockButtons2AdditionalDirty && textBlockButtons2AdditionalErr || el.textBlockButtons2.length < 2) && <div className={s.errMess}>{textBlockButtons2AdditionalErr}</div>}
                  <input
                     className={(textBlockButtons2AdditionalDirty && textBlockButtons2AdditionalErr || el.textBlockButtons2.length < 2) ? s.inputErr : false}
                     type="text"
                     name="requiredLanguageValueButtons2"
                     onBlur={(e) => blurHandler(e)}
                     defaultValue={el.textBlockButtons2}
                     onChange={(e) => changeLanguagesValue(e.target.value, el.id, 'textBlockButtons2', setTextBlockButtons2AdditionalErr)}
                  />
               </div>
            </div>)}
         </div>

         <div className={s.languageContainer}>
            <div>
               <div className={s.inputContainer}>
                  <div className={s.titleInput}>
                     <FormattedMessage id="createLanding.title.buttons3" tagName="span" />{" " + "EN*"}
                  </div>

                  {(textBlockButtons3Dirty && textBlockButtons3Err) && <div className={s.errMess}>{textBlockButtons3Err}</div>}

                  <input
                     className={(textBlockButtons3Dirty && textBlockButtons3Err) ? s.inputErr : false}
                     type="text"
                     name="textBlockButtons3"
                     onBlur={(e) => blurHandler(e)}
                     value={requiredLanguageValueButtons3}
                     onChange={(e) => changeText(e.target.value, setRequiredLanguageValueButtons3, setTextBlockButtons3Err)}
                  />

               </div>
            </div>
            {selectLanguages.map((el, i) => <div>
               <div className={s.inputContainer}>
                  <div className={s.titleInput}>
                     <FormattedMessage id="createLanding.title.buttons3" tagName="span" />{" " + el.name + "*"}
                  </div>
                  {(textBlockButtons3AdditionalDirty && textBlockButtons3AdditionalErr || el.textBlockButtons3.length < 2) && <div className={s.errMess}>{textBlockButtons3AdditionalErr}</div>}
                  <input
                     className={(textBlockButtons3AdditionalDirty && textBlockButtons3AdditionalErr || el.textBlockButtons3.length < 2) ? s.inputErr : false}
                     type="text"
                     name="requiredLanguageValueButtons3"
                     onBlur={(e) => blurHandler(e)}
                     defaultValue={el.textBlockButtons3}
                     onChange={(e) => changeLanguagesValue(e.target.value, el.id, 'textBlockButtons3', setTextBlockButtons3AdditionalErr)}
                  />
               </div>
            </div>)}
         </div>

         <div className={s.languageContainer}>
            <div>
               <div className={s.inputContainer}>
                  <div className={s.titleInput}>
                     <FormattedMessage id="createLanding.title.buttons4" tagName="span" />{" " + "EN*"}
                  </div>

                  {(textBlockButtons4Dirty && textBlockButtons4Err) && <div className={s.errMess}>{textBlockButtons4Err}</div>}

                  <input
                     className={(textBlockButtons4Dirty && textBlockButtons4Err) ? s.inputErr : false}
                     type="text"
                     name="textBlockButtons4"
                     onBlur={(e) => blurHandler(e)}
                     value={requiredLanguageValueButtons4}
                     onChange={(e) => changeText(e.target.value, setRequiredLanguageValueButtons4, setTextBlockButtons4Err)}
                  />

               </div>
            </div>
            {selectLanguages.map((el, i) => <div>
               <div className={s.inputContainer}>
                  <div className={s.titleInput}>
                     <FormattedMessage id="createLanding.title.buttons4" tagName="span" />{" " + el.name + "*"}
                  </div>
                  {(textBlockButtons4AdditionalDirty && textBlockButtons4AdditionalErr || el.textBlockButtons4.length < 2) && <div className={s.errMess}>{textBlockButtons4AdditionalErr}</div>}
                  <input
                     className={(textBlockButtons4AdditionalDirty && textBlockButtons4AdditionalErr || el.textBlockButtons4.length < 2) ? s.inputErr : false}
                     type="text"
                     name="requiredLanguageValueButtons4"
                     onBlur={(e) => blurHandler(e)}
                     defaultValue={el.textBlockButtons4}
                     onChange={(e) => changeLanguagesValue(e.target.value, el.id, 'textBlockButtons4', setTextBlockButtons4AdditionalErr)}
                  />
               </div>
            </div>)}
         </div>

         <div className={s.languageContainer}>
            <div>
               <div className={s.inputContainer}>
                  <div className={s.titleInput}>
                     <FormattedMessage id="createLanding.title.buttons5" tagName="span" />{" " + "EN*"}
                  </div>

                  {(textBlockButtons5Dirty && textBlockButtons5Err) && <div className={s.errMess}>{textBlockButtons5Err}</div>}

                  <input
                     className={(textBlockButtons5Dirty && textBlockButtons5Err) ? s.inputErr : false}
                     type="text"
                     name="textBlockButtons5"
                     onBlur={(e) => blurHandler(e)}
                     value={requiredLanguageValueButtons5}
                     onChange={(e) => changeText(e.target.value, setRequiredLanguageValueButtons5, setTextBlockButtons5Err)}
                  />

               </div>
            </div>
            {selectLanguages.map((el, i) => <div>
               <div className={s.inputContainer}>
                  <div className={s.titleInput}>
                     <FormattedMessage id="createLanding.title.buttons5" tagName="span" />{" " + el.name + "*"}
                  </div>
                  {(textBlockButtons5AdditionalDirty && textBlockButtons5AdditionalErr || el.textBlockButtons5.length < 2) && <div className={s.errMess}>{textBlockButtons5AdditionalErr}</div>}
                  <input
                     className={(textBlockButtons5AdditionalDirty && textBlockButtons5AdditionalErr || el.textBlockButtons5.length < 2) ? s.inputErr : false}
                     type="text"
                     name="requiredLanguageValueButtons5"
                     onBlur={(e) => blurHandler(e)}
                     defaultValue={el.textBlockButtons5}
                     onChange={(e) => changeLanguagesValue(e.target.value, el.id, 'textBlockButtons5', setTextBlockButtons5AdditionalErr)}
                  />
               </div>
            </div>)}
         </div>

         <div className={s.text}>
            <FormattedMessage id="createLanding.title.registration" tagName="h1" />
         </div>

         <div className={s.languageContainer}>
            <div>
               <div className={s.inputContainer}>
                  <div className={s.titleInput}>
                     <FormattedMessage id="createLanding.title.registration1" tagName="span" />{" " + "EN*"}
                  </div>

                  {(textBlockRegistration1Dirty && textBlockRegistration1Err) && <div className={s.errMess}>{textBlockRegistration1Err}</div>}

                  <input
                     className={(textBlockRegistration1Dirty && textBlockRegistration1Err) ? s.inputErr : false}
                     type="text"
                     name="textBlockRegistration1"
                     onBlur={(e) => blurHandler(e)}
                     value={requiredLanguageValueRegistration1}
                     onChange={(e) => changeText(e.target.value, setRequiredLanguageValueRegistration1, setTextBlockRegistration1Err)}
                  />

               </div>
            </div>
            {selectLanguages.map((el, i) => <div>
               <div className={s.inputContainer}>
                  <div className={s.titleInput}>
                     <FormattedMessage id="createLanding.title.registration1" tagName="span" />{" " + el.name + "*"}
                  </div>
                  {(textBlockRegistration1AdditionalDirty && textBlockRegistration1AdditionalErr || el.textBlockRegistration1.length < 2) && <div className={s.errMess}>{textBlockRegistration1AdditionalErr}</div>}
                  <input
                     className={(textBlockRegistration1AdditionalDirty && textBlockRegistration1AdditionalErr || el.textBlockRegistration1.length < 2) ? s.inputErr : false}
                     type="text"
                     name="requiredLanguageValueRegistration1"
                     onBlur={(e) => blurHandler(e)}
                     defaultValue={el.textBlockRegistration1}
                     onChange={(e) => changeLanguagesValue(e.target.value, el.id, 'textBlockRegistration1', setTextBlockRegistration1AdditionalErr)}
                  />
               </div>
            </div>)}
         </div>

         <div className={s.languageContainer}>
            <div>
               <div className={s.inputContainer}>
                  <div className={s.titleInput}>
                     <FormattedMessage id="createLanding.title.registration2" tagName="span" />{" " + "EN*"}
                  </div>

                  {(textBlockRegistration2Dirty && textBlockRegistration2Err) && <div className={s.errMess}>{textBlockRegistration2Err}</div>}

                  <input
                     className={(textBlockRegistration2Dirty && textBlockRegistration2Err) ? s.inputErr : false}
                     type="text"
                     name="textBlockRegistration2"
                     onBlur={(e) => blurHandler(e)}
                     value={requiredLanguageValueRegistration2}
                     onChange={(e) => changeText(e.target.value, setRequiredLanguageValueRegistration2, setTextBlockRegistration2Err)}
                  />

               </div>
            </div>
            {selectLanguages.map((el, i) => <div>
               <div className={s.inputContainer}>
                  <div className={s.titleInput}>
                     <FormattedMessage id="createLanding.title.registration2" tagName="span" />{" " + el.name + "*"}
                  </div>
                  {(textBlockRegistration2AdditionalDirty && textBlockRegistration2AdditionalErr || el.textBlockRegistration2.length < 2) && <div className={s.errMess}>{textBlockRegistration2AdditionalErr}</div>}
                  <input
                     className={(textBlockRegistration2AdditionalDirty && textBlockRegistration2AdditionalErr || el.textBlockRegistration2.length < 2) ? s.inputErr : false}
                     type="text"
                     name="requiredLanguageValueRegistration2"
                     onBlur={(e) => blurHandler(e)}
                     defaultValue={el.textBlockRegistration2}
                     onChange={(e) => changeLanguagesValue(e.target.value, el.id, 'textBlockRegistration2', setTextBlockRegistration2AdditionalErr)}
                  />
               </div>
            </div>)}
         </div>

         <div className={s.languageContainer}>
            <div>
               <div className={s.inputContainer}>
                  <div className={s.titleInput}>
                     <FormattedMessage id="createLanding.title.registration3" tagName="span" />{" " + "EN*"}
                  </div>

                  {(textBlockRegistration3Dirty && textBlockRegistration3Err) && <div className={s.errMess}>{textBlockRegistration3Err}</div>}

                  <input
                     className={(textBlockRegistration3Dirty && textBlockRegistration3Err) ? s.inputErr : false}
                     type="text"
                     name="textBlockRegistration3"
                     onBlur={(e) => blurHandler(e)}
                     value={requiredLanguageValueRegistration3}
                     onChange={(e) => changeText(e.target.value, setRequiredLanguageValueRegistration3, setTextBlockRegistration3Err)}
                  />

               </div>
            </div>
            {selectLanguages.map((el, i) => <div>
               <div className={s.inputContainer}>
                  <div className={s.titleInput}>
                     <FormattedMessage id="createLanding.title.registration3" tagName="span" />{" " + el.name + "*"}
                  </div>
                  {(textBlockRegistration3AdditionalDirty && textBlockRegistration3AdditionalErr || el.textBlockRegistration3.length < 2) && <div className={s.errMess}>{textBlockRegistration3AdditionalErr}</div>}
                  <input
                     className={(textBlockRegistration3AdditionalDirty && textBlockRegistration3AdditionalErr || el.textBlockRegistration3.length < 2) ? s.inputErr : false}
                     type="text"
                     name="requiredLanguageValueRegistration3"
                     onBlur={(e) => blurHandler(e)}
                     defaultValue={el.textBlockRegistration3}
                     onChange={(e) => changeLanguagesValue(e.target.value, el.id, 'textBlockRegistration3', setTextBlockRegistration3AdditionalErr)}
                  />
               </div>
            </div>)}
         </div>

         <div className={s.languageContainer}>
            <div>
               <div className={s.inputContainer}>
                  <div className={s.titleInput}>
                     <FormattedMessage id="createLanding.title.registration4" tagName="span" />{" " + "EN*"}
                  </div>

                  {(textBlockRegistration4Dirty && textBlockRegistration4Err) && <div className={s.errMess}>{textBlockRegistration4Err}</div>}

                  <input
                     className={(textBlockRegistration4Dirty && textBlockRegistration4Err) ? s.inputErr : false}
                     type="text"
                     name="textBlockRegistration4"
                     onBlur={(e) => blurHandler(e)}
                     value={requiredLanguageValueRegistration4}
                     onChange={(e) => changeText(e.target.value, setRequiredLanguageValueRegistration4, setTextBlockRegistration4Err)}
                  />

               </div>
            </div>
            {selectLanguages.map((el, i) => <div>
               <div className={s.inputContainer}>
                  <div className={s.titleInput}>
                     <FormattedMessage id="createLanding.title.registration4" tagName="span" />{" " + el.name + "*"}
                  </div>
                  {(textBlockRegistration4AdditionalDirty && textBlockRegistration4AdditionalErr || el.textBlockRegistration4.length < 2) && <div className={s.errMess}>{textBlockRegistration4AdditionalErr}</div>}
                  <input
                     className={(textBlockRegistration4AdditionalDirty && textBlockRegistration4AdditionalErr || el.textBlockRegistration4.length < 2) ? s.inputErr : false}
                     type="text"
                     name="requiredLanguageValueRegistration4"
                     onBlur={(e) => blurHandler(e)}
                     defaultValue={el.textBlockRegistration4}
                     onChange={(e) => changeLanguagesValue(e.target.value, el.id, 'textBlockRegistration4', setTextBlockRegistration4AdditionalErr)}
                  />
               </div>
            </div>)}
         </div>

         <div className={s.languageContainer}>
            <div>
               <div className={s.inputContainer}>
                  <div className={s.titleInput}>
                     <FormattedMessage id="createLanding.title.registration5" tagName="span" />{" " + "EN*"}
                  </div>

                  {(textBlockRegistration5Dirty && textBlockRegistration5Err) && <div className={s.errMess}>{textBlockRegistration5Err}</div>}

                  <input
                     className={(textBlockRegistration5Dirty && textBlockRegistration5Err) ? s.inputErr : false}
                     type="text"
                     name="textBlockRegistration5"
                     onBlur={(e) => blurHandler(e)}
                     value={requiredLanguageValueRegistration5}
                     onChange={(e) => changeText(e.target.value, setRequiredLanguageValueRegistration5, setTextBlockRegistration5Err)}
                  />

               </div>
            </div>
            {selectLanguages.map((el, i) => <div>
               <div className={s.inputContainer}>
                  <div className={s.titleInput}>
                     <FormattedMessage id="createLanding.title.registration5" tagName="span" />{" " + el.name + "*"}
                  </div>
                  {(textBlockRegistration5AdditionalDirty && textBlockRegistration5AdditionalErr || el.textBlockRegistration5.length < 2) && <div className={s.errMess}>{textBlockRegistration5AdditionalErr}</div>}
                  <input
                     className={(textBlockRegistration5AdditionalDirty && textBlockRegistration5AdditionalErr || el.textBlockRegistration5.length < 2) ? s.inputErr : false}
                     type="text"
                     name="requiredLanguageValueRegistration5"
                     onBlur={(e) => blurHandler(e)}
                     defaultValue={el.textBlockRegistration5}
                     onChange={(e) => changeLanguagesValue(e.target.value, el.id, 'textBlockRegistration5', setTextBlockRegistration5AdditionalErr)}
                  />
               </div>
            </div>)}
         </div>

         <div className={s.languageContainer}>
            <div>
               <div className={s.inputContainer}>
                  <div className={s.titleInput}>
                     <FormattedMessage id="createLanding.title.registration6" tagName="span" />{" " + "EN*"}
                  </div>

                  {(textBlockRegistration6Dirty && textBlockRegistration6Err) && <div className={s.errMess}>{textBlockRegistration6Err}</div>}

                  <input
                     className={(textBlockRegistration6Dirty && textBlockRegistration6Err) ? s.inputErr : false}
                     type="text"
                     name="textBlockRegistration6"
                     onBlur={(e) => blurHandler(e)}
                     value={requiredLanguageValueRegistration6}
                     onChange={(e) => changeText(e.target.value, setRequiredLanguageValueRegistration6, setTextBlockRegistration6Err)}
                  />

               </div>
            </div>
            {selectLanguages.map((el, i) => <div>
               <div className={s.inputContainer}>
                  <div className={s.titleInput}>
                     <FormattedMessage id="createLanding.title.registration6" tagName="span" />{" " + el.name + "*"}
                  </div>
                  {(textBlockRegistration6AdditionalDirty && textBlockRegistration6AdditionalErr || el.textBlockRegistration6.length < 2) && <div className={s.errMess}>{textBlockRegistration6AdditionalErr}</div>}
                  <input
                     className={(textBlockRegistration6AdditionalDirty && textBlockRegistration6AdditionalErr || el.textBlockRegistration6.length < 2) ? s.inputErr : false}
                     type="text"
                     name="requiredLanguageValueRegistration6"
                     onBlur={(e) => blurHandler(e)}
                     defaultValue={el.textBlockRegistration6}
                     onChange={(e) => changeLanguagesValue(e.target.value, el.id, 'textBlockRegistration6', setTextBlockRegistration6AdditionalErr)}
                  />
               </div>
            </div>)}
         </div>

         <div className={s.languageContainer}>
            <div>
               <div className={s.inputContainer}>
                  <div className={s.titleInput}>
                     <FormattedMessage id="createLanding.title.registration7" tagName="span" />{" " + "EN*"}
                  </div>

                  {(textBlockRegistration7Dirty && textBlockRegistration7Err) && <div className={s.errMess}>{textBlockRegistration7Err}</div>}

                  <input
                     className={(textBlockRegistration7Dirty && textBlockRegistration7Err) ? s.inputErr : false}
                     type="text"
                     name="textBlockRegistration7"
                     onBlur={(e) => blurHandler(e)}
                     value={requiredLanguageValueRegistration7}
                     onChange={(e) => changeText(e.target.value, setRequiredLanguageValueRegistration7, setTextBlockRegistration7Err)}
                  />

               </div>
            </div>
            {selectLanguages.map((el, i) => <div>
               <div className={s.inputContainer}>
                  <div className={s.titleInput}>
                     <FormattedMessage id="createLanding.title.registration7" tagName="span" />{" " + el.name + "*"}
                  </div>
                  {(textBlockRegistration7AdditionalDirty && textBlockRegistration7AdditionalErr || el.textBlockRegistration7.length < 2) && <div className={s.errMess}>{textBlockRegistration7AdditionalErr}</div>}
                  <input
                     className={(textBlockRegistration7AdditionalDirty && textBlockRegistration7AdditionalErr || el.textBlockRegistration7.length < 2) ? s.inputErr : false}
                     type="text"
                     name="requiredLanguageValueRegistration7"
                     onBlur={(e) => blurHandler(e)}
                     defaultValue={el.textBlockRegistration7}
                     onChange={(e) => changeLanguagesValue(e.target.value, el.id, 'textBlockRegistration7', setTextBlockRegistration7AdditionalErr)}
                  />
               </div>
            </div>)}
         </div>

         <div className={s.languageContainer}>
            <div>
               <div className={s.inputContainer}>
                  <div className={s.titleInput}>
                     <FormattedMessage id="createLanding.title.registration8" tagName="span" />{" " + "EN*"}
                  </div>

                  {(textBlockRegistration8Dirty && textBlockRegistration8Err) && <div className={s.errMess}>{textBlockRegistration8Err}</div>}

                  <input
                     className={(textBlockRegistration8Dirty && textBlockRegistration8Err) ? s.inputErr : false}
                     type="text"
                     name="textBlockRegistration8"
                     onBlur={(e) => blurHandler(e)}
                     value={requiredLanguageValueRegistration8}
                     onChange={(e) => changeText(e.target.value, setRequiredLanguageValueRegistration8, setTextBlockRegistration8Err)}
                  />

               </div>
            </div>
            {selectLanguages.map((el, i) => <div>
               <div className={s.inputContainer}>
                  <div className={s.titleInput}>
                     <FormattedMessage id="createLanding.title.registration8" tagName="span" />{" " + el.name + "*"}
                  </div>
                  {(textBlockRegistration8AdditionalDirty && textBlockRegistration8AdditionalErr || el.textBlockRegistration8.length < 2) && <div className={s.errMess}>{textBlockRegistration8AdditionalErr}</div>}
                  <input
                     className={(textBlockRegistration8AdditionalDirty && textBlockRegistration8AdditionalErr || el.textBlockRegistration8.length < 2) ? s.inputErr : false}
                     type="text"
                     name="requiredLanguageValueRegistration8"
                     onBlur={(e) => blurHandler(e)}
                     defaultValue={el.textBlockRegistration8}
                     onChange={(e) => changeLanguagesValue(e.target.value, el.id, 'textBlockRegistration8', setTextBlockRegistration8AdditionalErr)}
                  />
               </div>
            </div>)}
         </div>

         <div className={s.languageContainer}>
            <div>
               <div className={s.inputContainer}>
                  <div className={s.titleInput}>
                     <FormattedMessage id="createLanding.title.registration9" tagName="span" />{" " + "EN*"}
                  </div>

                  {(textBlockRegistration9Dirty && textBlockRegistration9Err) && <div className={s.errMess}>{textBlockRegistration9Err}</div>}

                  <input
                     className={(textBlockRegistration9Dirty && textBlockRegistration9Err) ? s.inputErr : false}
                     type="text"
                     name="textBlockRegistration9"
                     onBlur={(e) => blurHandler(e)}
                     value={requiredLanguageValueRegistration9}
                     onChange={(e) => changeText(e.target.value, setRequiredLanguageValueRegistration9, setTextBlockRegistration9Err)}
                  />

               </div>
            </div>
            {selectLanguages.map((el, i) => <div>
               <div className={s.inputContainer}>
                  <div className={s.titleInput}>
                     <FormattedMessage id="createLanding.title.registration9" tagName="span" />{" " + el.name + "*"}
                  </div>
                  {(textBlockRegistration9AdditionalDirty && textBlockRegistration9AdditionalErr || el.textBlockRegistration9.length < 2) && <div className={s.errMess}>{textBlockRegistration9AdditionalErr}</div>}
                  <input
                     className={(textBlockRegistration9AdditionalDirty && textBlockRegistration9AdditionalErr || el.textBlockRegistration9.length < 2) ? s.inputErr : false}
                     type="text"
                     name="requiredLanguageValueRegistration9"
                     onBlur={(e) => blurHandler(e)}
                     defaultValue={el.textBlockRegistration9}
                     onChange={(e) => changeLanguagesValue(e.target.value, el.id, 'textBlockRegistration9', setTextBlockRegistration9AdditionalErr)}
                  />
               </div>
            </div>)}
         </div>

         <div className={s.languageContainer}>
            <div>
               <div className={s.inputContainer}>
                  <div className={s.titleInput}>
                     <FormattedMessage id="createLanding.title.registration10" tagName="span" />{" " + "EN*"}
                  </div>

                  {(textBlockRegistration10Dirty && textBlockRegistration10Err) && <div className={s.errMess}>{textBlockRegistration10Err}</div>}

                  <input
                     className={(textBlockRegistration10Dirty && textBlockRegistration10Err) ? s.inputErr : false}
                     type="text"
                     name="textBlockRegistration10"
                     onBlur={(e) => blurHandler(e)}
                     value={requiredLanguageValueRegistration10}
                     onChange={(e) => changeText(e.target.value, setRequiredLanguageValueRegistration10, setTextBlockRegistration10Err)}
                  />

               </div>
            </div>
            {selectLanguages.map((el, i) => <div>
               <div className={s.inputContainer}>
                  <div className={s.titleInput}>
                     <FormattedMessage id="createLanding.title.registration10" tagName="span" />{" " + el.name + "*"}
                  </div>
                  {(textBlockRegistration10AdditionalDirty && textBlockRegistration10AdditionalErr || el.textBlockRegistration10.length < 2) && <div className={s.errMess}>{textBlockRegistration10AdditionalErr}</div>}
                  <input
                     className={(textBlockRegistration10AdditionalDirty && textBlockRegistration10AdditionalErr || el.textBlockRegistration10.length < 2) ? s.inputErr : false}
                     type="text"
                     name="requiredLanguageValueRegistration10"
                     onBlur={(e) => blurHandler(e)}
                     defaultValue={el.textBlockRegistration10}
                     onChange={(e) => changeLanguagesValue(e.target.value, el.id, 'textBlockRegistration10', setTextBlockRegistration10AdditionalErr)}
                  />
               </div>
            </div>)}
         </div>

         <div className={s.languageContainer}>
            <div>
               <div className={s.inputContainer}>
                  <div className={s.titleInput}>
                     <FormattedMessage id="createLanding.title.registration11" tagName="span" />{" " + "EN*"}
                  </div>

                  {(textBlockRegistration11Dirty && textBlockRegistration11Err) && <div className={s.errMess}>{textBlockRegistration11Err}</div>}

                  <input
                     className={(textBlockRegistration11Dirty && textBlockRegistration11Err) ? s.inputErr : false}
                     type="text"
                     name="textBlockRegistration11"
                     onBlur={(e) => blurHandler(e)}
                     value={requiredLanguageValueRegistration11}
                     onChange={(e) => changeText(e.target.value, setRequiredLanguageValueRegistration11, setTextBlockRegistration11Err)}
                  />

               </div>
            </div>
            {selectLanguages.map((el, i) => <div>
               <div className={s.inputContainer}>
                  <div className={s.titleInput}>
                     <FormattedMessage id="createLanding.title.registration11" tagName="span" />{" " + el.name + "*"}
                  </div>
                  {(textBlockRegistration11AdditionalDirty && textBlockRegistration11AdditionalErr || el.textBlockRegistration11.length < 2) && <div className={s.errMess}>{textBlockRegistration11AdditionalErr}</div>}
                  <input
                     className={(textBlockRegistration11AdditionalDirty && textBlockRegistration11AdditionalErr || el.textBlockRegistration11.length < 2) ? s.inputErr : false}
                     type="text"
                     name="requiredLanguageValueRegistration11"
                     onBlur={(e) => blurHandler(e)}
                     defaultValue={el.textBlockRegistration11}
                     onChange={(e) => changeLanguagesValue(e.target.value, el.id, 'textBlockRegistration11', setTextBlockRegistration11AdditionalErr)}
                  />
               </div>
            </div>)}
         </div>

         <div className={s.languageContainer}>
            <div>
               <div className={s.inputContainer}>
                  <div className={s.titleInput}>
                     <FormattedMessage id="createLanding.title.registration12" tagName="span" />{" " + "EN*"}
                  </div>

                  {(textBlockRegistration12Dirty && textBlockRegistration12Err) && <div className={s.errMess}>{textBlockRegistration12Err}</div>}

                  <input
                     className={(textBlockRegistration12Dirty && textBlockRegistration12Err) ? s.inputErr : false}
                     type="text"
                     name="textBlockRegistration12"
                     onBlur={(e) => blurHandler(e)}
                     value={requiredLanguageValueRegistration12}
                     onChange={(e) => changeText(e.target.value, setRequiredLanguageValueRegistration12, setTextBlockRegistration12Err)}
                  />

               </div>
            </div>
            {selectLanguages.map((el, i) => <div>
               <div className={s.inputContainer}>
                  <div className={s.titleInput}>
                     <FormattedMessage id="createLanding.title.registration12" tagName="span" />{" " + el.name + "*"}
                  </div>
                  {(textBlockRegistration12AdditionalDirty && textBlockRegistration12AdditionalErr || el.textBlockRegistration12.length < 2) && <div className={s.errMess}>{textBlockRegistration12AdditionalErr}</div>}
                  <input
                     className={(textBlockRegistration12AdditionalDirty && textBlockRegistration12AdditionalErr || el.textBlockRegistration12.length < 2) ? s.inputErr : false}
                     type="text"
                     name="requiredLanguageValueRegistration12"
                     onBlur={(e) => blurHandler(e)}
                     defaultValue={el.textBlockRegistration12}
                     onChange={(e) => changeLanguagesValue(e.target.value, el.id, 'textBlockRegistration12', setTextBlockRegistration12AdditionalErr)}
                  />
               </div>
            </div>)}
         </div>

         <div className={s.languageContainer}>
            <div>
               <div className={s.inputContainer}>
                  <div className={s.titleInput}>
                     <FormattedMessage id="createLanding.title.registration13" tagName="span" />{" " + "EN*"}
                  </div>

                  {(textBlockRegistration13Dirty && textBlockRegistration13Err) && <div className={s.errMess}>{textBlockRegistration13Err}</div>}

                  <input
                     className={(textBlockRegistration13Dirty && textBlockRegistration13Err) ? s.inputErr : false}
                     type="text"
                     name="textBlockRegistration13"
                     onBlur={(e) => blurHandler(e)}
                     value={requiredLanguageValueRegistration13}
                     onChange={(e) => changeText(e.target.value, setRequiredLanguageValueRegistration13, setTextBlockRegistration13Err)}
                  />

               </div>
            </div>
            {selectLanguages.map((el, i) => <div>
               <div className={s.inputContainer}>
                  <div className={s.titleInput}>
                     <FormattedMessage id="createLanding.title.registration13" tagName="span" />{" " + el.name + "*"}
                  </div>
                  {(textBlockRegistration13AdditionalDirty && textBlockRegistration13AdditionalErr || el.textBlockRegistration13.length < 2) && <div className={s.errMess}>{textBlockRegistration13AdditionalErr}</div>}
                  <input
                     className={(textBlockRegistration13AdditionalDirty && textBlockRegistration13AdditionalErr || el.textBlockRegistration13.length < 2) ? s.inputErr : false}
                     type="text"
                     name="requiredLanguageValueRegistration13"
                     onBlur={(e) => blurHandler(e)}
                     defaultValue={el.textBlockRegistration13}
                     onChange={(e) => changeLanguagesValue(e.target.value, el.id, 'textBlockRegistration13', setTextBlockRegistration13AdditionalErr)}
                  />
               </div>
            </div>)}
         </div>

         <div className={s.languageContainer}>
            <div>
               <div className={s.inputContainer}>
                  <div className={s.titleInput}>
                     <FormattedMessage id="createLanding.title.registration14" tagName="span" />{" " + "EN*"}
                  </div>

                  {(textBlockRegistration14Dirty && textBlockRegistration14Err) && <div className={s.errMess}>{textBlockRegistration14Err}</div>}

                  <input
                     className={(textBlockRegistration14Dirty && textBlockRegistration14Err) ? s.inputErr : false}
                     type="text"
                     name="textBlockRegistration14"
                     onBlur={(e) => blurHandler(e)}
                     value={requiredLanguageValueRegistration14}
                     onChange={(e) => changeText(e.target.value, setRequiredLanguageValueRegistration14, setTextBlockRegistration14Err)}
                  />

               </div>
            </div>
            {selectLanguages.map((el, i) => <div>
               <div className={s.inputContainer}>
                  <div className={s.titleInput}>
                     <FormattedMessage id="createLanding.title.registration14" tagName="span" />{" " + el.name + "*"}
                  </div>
                  {(textBlockRegistration14AdditionalDirty && textBlockRegistration14AdditionalErr || el.textBlockRegistration14.length < 2) && <div className={s.errMess}>{textBlockRegistration14AdditionalErr}</div>}
                  <input
                     className={(textBlockRegistration14AdditionalDirty && textBlockRegistration14AdditionalErr || el.textBlockRegistration14.length < 2) ? s.inputErr : false}
                     type="text"
                     name="requiredLanguageValueRegistration14"
                     onBlur={(e) => blurHandler(e)}
                     defaultValue={el.textBlockRegistration14}
                     onChange={(e) => changeLanguagesValue(e.target.value, el.id, 'textBlockRegistration14', setTextBlockRegistration14AdditionalErr)}
                  />
               </div>
            </div>)}
         </div>

         <br />
         {formValid ? <button onClick={handleSubmit}>Submit</button> : <button className={s.submitErr} >Submit</button>}



      </div >
   )
}
export default CreateLanding;