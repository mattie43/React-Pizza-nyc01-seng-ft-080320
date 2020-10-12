import React from "react";

class PizzaForm extends React.Component {

  onSubmit = (e) => {
    e.preventDefault()
    this.props.onSubmit(this.props.currentPizza)
  }

  onChange = (e) => {
    this.props.onChange(e.target.name, e.target.value)
  }

  onClick = (e) => {
    e.target.value === 'Vegetarian' ? this.props.onClick(true) : this.props.onClick(false)
  }

  render() {
    return (
      <div className="form-row">
        <div className="col-5">
          <input
            type="text"
            className="form-control"
            placeholder="Pizza Topping"
            name="topping"
            onChange={this.onChange}
            value={this.props.currentPizza.topping}
          />
        </div>
        <div className="col">
          <select name="size" value={this.props.currentPizza.size} onChange={this.onChange} className="form-control">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              value="Vegetarian"
              onClick={this.onClick}
              checked={this.props.currentPizza.vegetarian}
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              value="Not Vegetarian"
              onClick={this.onClick}
              checked={!this.props.currentPizza.vegetarian}
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button
            type="submit"
            className="btn btn-success"
            onClick={this.onSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    );
  }
}

export default PizzaForm;
