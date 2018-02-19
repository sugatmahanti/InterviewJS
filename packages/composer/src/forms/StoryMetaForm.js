import React from "react";
import { func, object, shape, string } from "prop-types";

import {
  Actionbar,
  Action,
  CharacterCount,
  Container,
  Form,
  FormItem,
  Label,
  Legend,
  Separator,
  TextInput
} from "interviewjs-styleguide";

export default class StoryMetaForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        author: this.props.story.author,
        authorLink: this.props.story.authorLink,
        media: {
          cover: this.props.story.media.cover,
          logo: this.props.story.media.logo
        },
        pubDate: this.props.story.pubDate,
        title: this.props.story.title
      }
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    if (e) e.preventDefault();
    this.props.handleSubmit(this.state.formData);
  }
  handleInput(e) {
    this.setState({
      formData: { ...this.state.formData, [e.target.name]: e.target.value }
    });
  }
  render() {
    return (
      <Form onSubmit={(e) => this.handleSubmit(e)}>
        <FormItem>
          <Label>Title</Label>
          <CharacterCount>
            {140 - this.state.formData.title.length}
          </CharacterCount>
          <TextInput
            input
            maxlength="140"
            name="title"
            onChange={(e) => this.handleInput(e)}
            placeholder="Placeholder…"
            required
            value={this.state.formData.title}
          />
          <Legend tip="This is a title">i</Legend>
        </FormItem>
        <Separator size="m" silent />
        <FormItem>
          <Label>Byline</Label>
          <Container dir="row">
            <Container flex={[0, 0, `${100 / 3}%`]}>
              <CharacterCount>
                {70 - this.state.formData.author.length}
              </CharacterCount>
              <TextInput
                input
                maxlength="70"
                name="author"
                onChange={(e) => this.handleInput(e)}
                place="left"
                placeholder="Author’s name"
                value={this.state.formData.author}
              />
            </Container>
            <Container flex={[0, 0, `${100 / 3}%`]}>
              <TextInput
                input
                name="authorLink"
                onChange={(e) => this.handleInput(e)}
                place="middle"
                placeholder="Link…"
                value={this.state.formData.authorLink}
              />
            </Container>
            <Container flex={[0, 0, `${100 / 3}%`]}>
              <CharacterCount>
                {70 - this.state.formData.pubDate.length}
              </CharacterCount>
              <TextInput
                input
                maxlength="70"
                name="pubDate"
                onChange={(e) => this.handleInput(e)}
                place="right"
                placeholder="Publication date…"
                value={this.state.formData.pubDate}
              />
            </Container>
          </Container>
          <Legend tip="tip">i</Legend>
        </FormItem>
        <Separator size="m" silent />
        <FormItem>
          <Label>Imagery</Label>
          <Container dir="row">
            <Container flex={[0, 0, `${100 / 2}%`]}>
              <TextInput
                input
                onChange={(e) => this.handleInput(e)}
                place="left"
                placeholder="Cover photo"
                type="file"
                value={this.state.formData.media.cover}
              />
            </Container>
            <Container flex={[0, 0, `${100 / 2}%`]}>
              <TextInput
                input
                nooffset
                onChange={(e) => this.handleInput(e)}
                place="right"
                placeholder="Custom logo"
                type="file"
                value={this.state.formData.media.logo}
              />
            </Container>
          </Container>
          <Legend tip="tip">i</Legend>
        </FormItem>
        <Separator size="m" silent />
        <Actionbar>
          <Action fixed primary type="submit">
            Save
          </Action>
        </Actionbar>
      </Form>
    );
  }
}

StoryMetaForm.propTypes = {
  handleSubmit: func.isRequired,
  story: shape({
    title: string,
    author: string,
    authorLink: string,
    pubDate: string,
    media: object
  })
};

StoryMetaForm.defaultProps = {
  story: {
    title: "",
    author: "",
    authorLink: "",
    pubDate: "",
    media: {
      cover: undefined,
      logo: undefined
    }
  }
};
