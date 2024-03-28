import { useState } from 'react';
import Modal from 'react-modal';
import { Rewiews } from '../Rewiews/Rewiews';
import { BookForm } from '../BookForm/BookForm';
import { Features } from '../Features/Features';
import * as c from './Modal.styled';
import { CommonIcon } from '../CommonIcon/CommonIcon';

const customStyles = {
  overlay: {
    background: 'rgba(17, 18, 19, 0.4)',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    width: '982px',
    height: '720px',
    overflow: 'hidden',
    padding: '40px 16px 40px 40px',
    borderRadius: '20px',
    marginRight: '-50%',
    paddingLeft: '-5px',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

export const CamperModal = ({ isModalOpen, closeModal, camper }) => {
  const [activeTab, setActiveTab] = useState('features');

  const changeTab = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Camper Modal"
    >
      <>
        <c.TitleModalConntainer>
          <c.ModalTitleWrapper>
            <c.ModalCamperTitle>{camper.name}</c.ModalCamperTitle>
            <c.CloseButton onClick={closeModal}>
              <c.CloseIcon />
            </c.CloseButton>
          </c.ModalTitleWrapper>
          <c.CamperSubtitleModalWrapper>
            <c.StarIcon />
            <c.CamperSubtitleModalText
              style={{
                textDecoration: 'underline',
                textDecorationSkipInk: 'none',
                textUnderlineOffset: '4px',
                marginRight: '16px',
              }}
            >{`${camper.rating}(${camper.reviews.length} Reviews)`}</c.CamperSubtitleModalText>
            <CommonIcon name="icon-map-pin" size="16px" margin="4px" />
            <c.CamperSubtitleModalText>
              {camper.location}
            </c.CamperSubtitleModalText>
          </c.CamperSubtitleModalWrapper>
          <c.ModalPrice>{`€${camper.price.toFixed(2)}`}</c.ModalPrice>
        </c.TitleModalConntainer>
        <c.OverflowScrollbarWrapper>
          <c.OverflowContainer>
            <c.ModalImgWrapper>
              {camper.gallery.map((img, index) => (
                <li key={index}>
                  <c.CamperModalImg src={img} alt="camper" />
                </li>
              ))}
            </c.ModalImgWrapper>
            <c.CamperModalDescription>
              {camper.description}
            </c.CamperModalDescription>
            <c.TabWrapper>
              <li>
                <c.TabButton
                  type="button"
                  onClick={() => changeTab('features')}
                  $active={activeTab === 'features'}
                >
                  Features
                </c.TabButton>
              </li>
              <li>
                <c.TabButton
                  type="button"
                  onClick={() => changeTab('reviews')}
                  $active={activeTab === 'reviews'}
                >
                  Reviews
                </c.TabButton>
              </li>
            </c.TabWrapper>
            <c.BottomModalContainer>
              {activeTab === 'reviews' ? (
                <Rewiews camper={camper} />
              ) : (
                <Features camper={camper} />
              )}
              <BookForm close={closeModal} />
            </c.BottomModalContainer>
          </c.OverflowContainer>
        </c.OverflowScrollbarWrapper>
      </>
    </Modal>
  );
};
