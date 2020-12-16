import React, { useState } from "react";
import DSZipCodeSearch from "@elliemae/ds-basic/dszipcodesearch";
import DSInputMask from "@elliemae/ds-basic/cjs/form/InputMask";
import DSFormItemLayout from "@elliemae/ds-basic/form/FormItem";
import { MASK_TYPES } from '@elliemae/ds-basic/form/InputMask';

export default () => {
  const [value, setValue] = useState();
  const [value2, setValue2] = useState();
  const [search, setSearch] = useState('');
  const defaultOptions = [];
  const handleOnBlur = () => console.log('Access onBlur function');
  const style = {
    width: '100px',
  };
  return (
    <div style={{width: '60px'}}>
      <DSFormItemLayout
        extraInputProps={{
          onSearch: v => setSearch(v),
          options: search.includes('11') ? [] : defaultOptions,
        }}
        feedbackMessage="Some feedback from de user..."
        hasError={search.includes('11')}
        inputComponent={DSZipCodeSearch}
        labelText="Input search"
        onBlur={handleOnBlur}
        validationMessage={search.includes('11') ? 'No matches found' : null}
        value={value}
        style={style}
        placeholder ="Placeholder Value"
        disableTooltip={false}
        isShowElipsisActive={true}
      />
      <DSInputMask
        containerProps={{ id: 'my-custom-id' }}
        mask={MASK_TYPES.SSN}
        onChange={e => setValue2(e.target.value)}
        value={value2}
        placeholder ="Placeholder Value"
        disableTooltip={false}
        isShowElipsisActive={true}
      />
    </div>
  );
};
