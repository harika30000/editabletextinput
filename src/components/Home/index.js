import {Component} from 'react'
import {
  BgContainer,
  CardContainer,
  Heading,
  EditableInputContainer,
  InputField,
  ParagraphText,
  Button,
} from './styledComponents'

class Home extends Component {
  state = {
    EditableText: '',
    isButtonClicked: false,
  }

  onChangeSearchInput = event => {
    this.setState({EditableText: event.target.value})
  }

  onSaveClick = () => {
    this.setState(prevState => ({isButtonClicked: !prevState.isButtonClicked}))
  }

  onEditClick = () => {
    this.setState({isButtonClicked: false})
  }

  render() {
    const {EditableText, isButtonClicked} = this.state
    const EditSaveButton = isButtonClicked ? 'Edit' : 'Save'

    return (
      <BgContainer>
        <CardContainer>
          <Heading>Editable Text Input</Heading>
          <EditableInputContainer>
            {isButtonClicked ? (
              <>
                <ParagraphText>{EditableText}</ParagraphText>
                <Button onClick={this.onEditClick}>Edit</Button>
              </>
            ) : (
              <>
                <InputField
                  type="text"
                  value={EditableText}
                  onChange={this.onChangeSearchInput}
                />
                <Button onClick={this.onSaveClick}>{EditSaveButton}</Button>
              </>
            )}
          </EditableInputContainer>
        </CardContainer>
      </BgContainer>
    )
  }
}

export default Home
