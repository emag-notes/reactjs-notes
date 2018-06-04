import * as React from 'react';
import { Field, FormProps, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

interface Props extends FormProps {
  title: string;
  categories: string;
  content: string;
}

class PostsNew extends React.Component<Props> {

  render() {
    return (
      <form>
        <Field
          label="Title"
          name="title"
          component={this.renderField}
        />
        <Field
          label="Categories"
          name="categories"
          component={this.renderField}
        />
        <Field
          label="Post Content"
          name="content"
          component={this.renderField}
        />
      </form>
    );
  }

  renderField(field: any) {
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
      </div>
    );
  }

}

const validate = (values: any) => {
  const errors: Props = {
    title: '',
    categories: '',
    content: ''
  };

  if (!values.title) {
    errors.title = 'Enter a title!';
  }
  if (values.title.length < 3) {
    errors.title = 'Title must be at least 3 characters';
  }
  if (!values.categories) {
    errors.categories = 'Enter some categories';
  }
  if (!values.content) {
    errors.content = 'Enter some content please';
  }

  return errors;
}

export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(connect()(PostsNew));
