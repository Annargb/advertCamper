import { useState } from 'react';
import Modal from 'react-modal';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { IoMdClose } from 'react-icons/io';
// import { NavLink } from 'react-router-dom';
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
    overflow: 'auto',
    // overflow: 'hidden',
    padding: '40px',
    borderRadius: '20px',
    marginRight: '-50%',
    paddingLeft: '-5px',
    transform: 'translate(-50%, -50%)',
    // scrollbarWidth: 'thin', // Тонкий скролбар для Firefox
    // scrollbarColor: '#d9d9d9 #fff',
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
        <PerfectScrollbar
          options={{
            wheelSpeed: 2, // Швидкість прокрутки за допомогою коліщатка миші
            wheelPropagation: false, // Прокрутка батьківського елемента при досягненні кінця скролбару
            minScrollbarLength: 20, // Мінімальна довжина скролбару
          }}
        >
          <div>
            <c.ModalTitleWrapper>
              <c.ModalCamperTitle>{camper.name}</c.ModalCamperTitle>
              <c.CloseButton onClick={closeModal}>
                <IoMdClose style={{ width: '32', height: '32' }} />
              </c.CloseButton>
            </c.ModalTitleWrapper>
            <c.CamperSubtitleModalWrapper>
              <c.SubtitleModalWrapper>
                <c.StarIcon />
                <c.CamperSubtitleModalText>{`${camper.rating}(${camper.reviews.length} Reviews)`}</c.CamperSubtitleModalText>
              </c.SubtitleModalWrapper>
              <c.SubtitleModalWrapper>
                <c.LocationIcon />
                <c.CamperSubtitleModalText>
                  {camper.location}
                </c.CamperSubtitleModalText>
              </c.SubtitleModalWrapper>
            </c.CamperSubtitleModalWrapper>
            <c.ModalPrice>{`₴${camper.price}`}</c.ModalPrice>

            <c.ModalImgWrapper>
              {camper.gallery.map((img, index) => (
                <c.CamperModalImgItem key={index}>
                  <c.CamperModalImg src={img} alt="camper" />
                </c.CamperModalImgItem>
              ))}
            </c.ModalImgWrapper>
            <c.CamperModalDescription>
              {camper.description}
            </c.CamperModalDescription>
            <c.TabWrapper>
              <li>
                {/* <NavLink to={`features/${camper.id}`}>Features</NavLink> */}
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
                {/* <NavLink to={`reviews/${camper.id}`}>Reviews</NavLink> */}
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
          </div>
        </PerfectScrollbar>
      </Modal>
    </div>
  );
};
