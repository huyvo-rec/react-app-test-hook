import { Component } from "react";

import "./form-item.scss";

interface IFormItem {
  fullname: string;
  email: string;
  numberID: number | string;
  expiryDate: string;
}
interface IForm {
  form: IFormItem;
}

class FormItem extends Component<any, IForm> {
  constructor(props: any) {
    super(props);
    this.state = {
      form: {
        fullname: "",
        email: "",
        numberID: "",
        expiryDate: "",
      },
    };
  }

  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState((prevState) => ({
      form: {
        ...prevState.form,
        [e.target.name]: e.target.value,
      },
    }));
  };

  render() {
    const { form } = this.state;

    return (
      <div className="form__item">
        <div className="form__item--input">
          <input
            type="text"
            name="fullname"
            required
            onChange={this.handleInputChange}
            value={form.fullname}
          />
          <label>Fullname</label>
        </div>
        <div className="form__item--input">
          <input
            type="text"
            name="email"
            required
            onChange={this.handleInputChange}
            value={form.email}
          />
          <label>Email</label>
        </div>
        <div className="form__item--input">
          <input
            type="number"
            name="numberID"
            required
            onChange={this.handleInputChange}
            value={form.numberID}
          />
          <label>Number ID</label>
        </div>
        <div className="form__item--input">
          <input
            type="text"
            name="expiryDate"
            required
            onChange={this.handleInputChange}
            value={form.expiryDate}
          />
          <label>Expiry Date</label>
        </div>
      </div>
    );
  }
}

export default FormItem;
