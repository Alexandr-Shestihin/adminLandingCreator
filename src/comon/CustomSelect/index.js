import React, { useState } from 'react';
import Select from 'react-select'
import s from './customSelect.module.scss';
import './select.scss';

const CustomSelect = (props) => {

   const initialize = props.isMulti ? [...props.initialValue] : props.initialValue;

   const [currentValues, setCurrentValues] = useState(initialize);

   const options = [];

   const getValue = () => {
      if (currentValues) {
         return props.isMulti ? options.filter(el => currentValues.indexOf(el.value) >= 0) : options.find(el => el.value === currentValues);
      } else {
         return props.isMulti ? [] : "";
      }
   }

   const onChangeSelect = (value) => {
      setCurrentValues(props.isMulti ? value.map(el => el.value) : value.value);
      props.onChangeValue(props.isMulti ? value.map(el => el[props.typeValue]) : value[props.typeValue]);
   }

   const MyComponent = () => {

      props.valuesBack?.map(el => {
         options.push({ value: el.id, label: el[props.itemParams] })
      })

      return (<div className={s.selectContainer}>
         <Select
            classNamePrefix='custom_select'
            onChange={onChangeSelect}
            value={getValue()}
            options={options}
            isMulti={props.isMulti}
            isLoading={!props.valuesBack && true}
            placeholder={props.placeholder}
            onBlur={() => props.onBlurChaked(getValue())}
         />
      </div>)
   }

   return (
      <div>
         <MyComponent />
      </div>
   )
}
export default CustomSelect;