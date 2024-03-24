import { useState } from 'react';
import Modal from 'react-modal';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { Rewiews } from '../Rewiews/Rewiews';
import { BookForm } from '../BookForm/BookForm';
import { Features } from '../Features/Features';
import * as c from './Modal.styled';

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
    padding: '40px',
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
    <div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Camper Modal"
      >
        <div>
          <c.ModalTitleWrapper>
            <c.ModalCamperTitle>{camper.name}</c.ModalCamperTitle>
            <c.CloseButton onClick={closeModal}>
              <c.CloseIcon />
            </c.CloseButton>
          </c.ModalTitleWrapper>
          <c.CamperSubtitleModalWrapper>
            <c.SubtitleModalWrapper>
              <c.StarIcon />
              <c.CamperSubtitleModalText
                style={{
                  textDecoration: 'underline',
                  textDecorationSkipInk: 'none',
                }}
              >{`${camper.rating}(${camper.reviews.length} Reviews)`}</c.CamperSubtitleModalText>
            </c.SubtitleModalWrapper>
            <c.SubtitleModalWrapper>
              <c.LocationIcon />
              <c.CamperSubtitleModalText>
                {camper.location}
              </c.CamperSubtitleModalText>
            </c.SubtitleModalWrapper>
          </c.CamperSubtitleModalWrapper>
          <c.ModalPrice>{`₴${camper.price}`}</c.ModalPrice>
          <PerfectScrollbar
            options={{
              wheelSpeed: 2,
              wheelPropagation: false,
              minScrollbarLength: 20,
            }}
          >
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
          </PerfectScrollbar>
        </div>
      </Modal>
    </div>
  );
};
