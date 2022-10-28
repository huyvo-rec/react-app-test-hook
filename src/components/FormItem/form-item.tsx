import { ChangeEventHandler } from "react";
import { IFormItem } from "../../pages/auth/auth";

import "./form-item.scss";

interface Props {
  form: IFormItem;
  handleInputChange: ChangeEventHandler<HTMLInputElement>;
}

const FormItem = (props: Props) => {
  const { form, handleInputChange } = props;

  return (
    <div className="form__item">
      <div className="form__item-input">
        <input
          type="text"
          name="fullname"
          required
          onChange={handleInputChange}
          value={form.fullname}
        />
        <label>Fullname</label>
      </div>
      <div className="form__item-input">
        <input
          type="text"
          name="email"
          required
          onChange={handleInputChange}
          value={form.email}
        />
        <label>Email</label>
      </div>
      <div className="form__item-input">
        <input
          type="text"
          name="numberID"
          required
          onChange={handleInputChange}
          value={form.numberID}
          placeholder={"xxxx-xxxx-xxxx-xxxx"}
        />
        <label>Number ID</label>
      </div>
      <div className="form__item-input">
        <input
          type="text"
          name="expiryDate"
          required
          onChange={handleInputChange}
          value={form.expiryDate}
        />
        <label>Expiry Date</label>
      </div>
    </div>
  );
};

export default FormItem;
