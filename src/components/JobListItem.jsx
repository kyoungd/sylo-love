import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export const Wrapper = styled.div`
  flex-direction: row;
  padding: 8px;
  border-radius: 8;
  margin: 16px 16px 8px;
  background-color: #fff;
  border-width: 1;
  border-color: #dee3ea;
`

const Left = styled.div`
  flex: 1;
  margin-right: 8;
`

export const Title = styled.p.attrs({
  numberOfLines: 1,
})`
  font-family: 'SourceSansProRegular';
  font-size: 17;
  color: #000;
  text-transform: uppercase;
`

export const CompanyName = styled.p.attrs({
  numberOfLines: 1
})`
  font-family: 'SourceSansProRegular';
  font-size: 15;
  color: #346df1;
  margin: 2px 0px 4px;
`

const Bottom = styled.div`
  height: 40;
  flex-direction: row;
`

const BottomItemWrapper = styled.div`
  flex: 1;
  flex-direction: row;
  align-items: center;
`

export const BottomItemText = styled.p.attrs({
  numberOfLines: 1,
})`
  font-family: 'SourceSansProRegular';
  font-size: 15;
  color: #a9a9a9;
  margin: 0px 4px 4px;
`

export default class JobListItem extends React.Component {

  render() {
    const { title, companyName, postedAt, experience, onPress } = this.props

    return (
      <Wrapper>
        <Left onPress={() => onPress()}>
          <Title>{title}</Title>
          <CompanyName>{companyName}</CompanyName>

          <Bottom>
            <BottomItemWrapper>
              <BottomItemText>{postedAt}</BottomItemText>
            </BottomItemWrapper>

            <BottomItemWrapper>
              <BottomItemText>Experience: {experience}</BottomItemText>
            </BottomItemWrapper>
          </Bottom>
        </Left>

      </Wrapper>
    )
  }
}

JobListItem.propTypes = {
  title: PropTypes.string.isRequired,
  companyName: PropTypes.string.isRequired,
  postedAt: PropTypes.string.isRequired,
  experience: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
}
