import { Formik, Form } from 'formik';
import * as c from './BookForm.styled';
// import 'react-datepicker/dist/react-datepicker.css';
import * as Yup from 'yup';
import { CommonIcon } from '../CommonIcon/CommonIcon';

const emailPattern = /^[a-z0-9._%+-]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/;

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .min(2, 'Name must contain at least 2 characters')
    .max(40, 'Too long name')
    .required('Name is required'),
  email: Yup.string()
    .trim()
    .matches(
      emailPattern,
      'Please enter a valid email! For example jane@mail.com'
    )
    .required('Email is required'),
  bookingDate: Yup.date()
    .min(new Date(), 'Booking date must be in the future')
    .max(new Date('2025-12-31'), 'Booking date is too far in the future')
    .required('Booking date is required'),
});

export const BookForm = () => {
  return (
    <c.BookFormWrapper>
      <c.FormTitle>Book your campervan now</c.FormTitle>
      <c.BookFormText>
        Stay connected! We are always ready to help you.
      </c.BookFormText>
      <Formik
        initialValues={{
          name: '',
          email: '',
          bookingDate: null,
          comment: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          actions.setSubmitting(true);
          actions.resetForm();
          window.location.reload();
        }}
      >
        {({ values, setFieldValue }) => (
          <Form>
            <c.InputWrapper>
              <c.FormGroup>
                <c.Field name="name" type="text" placeholder="Name" />
                <c.ErrorMessage name="name" component="span" required />
              </c.FormGroup>

              <c.FormGroup>
                <c.Field name="email" type="email" placeholder="Email" />
                <c.ErrorMessage name="email" component="span" required />
              </c.FormGroup>

              <c.FormGroup style={{ position: 'relative' }}>
                <c.StyledDataPicker
                  name="bookingDate"
                  placeholderText="Booking date"
                  dateFormat="dd.MM.yyyy"
                  selected={values.bookingDate}
                  onChange={(date) => setFieldValue('bookingDate', date)}
                  formatWeekDay={(day) => day.substr(0, 3)}
                  minDate={Date.now()}
                />
                <CommonIcon
                  name="icon-calendar"
                  size="20px"
                  position="absolute"
                  right="18px"
                  top="18px"
                  cursor="pointer"
                />
                <c.CalendarGlobalStyles />
                <c.ErrorMessage name="bookingDate" component="span" required />
              </c.FormGroup>

              <c.FormGroup>
                <c.Field
                  as="textarea"
                  name="comment"
                  type="text"
                  placeholder="Comment"
                  style={{ height: '114px', resize: 'none' }}
                />
              </c.FormGroup>
            </c.InputWrapper>

            <c.FormButton type="submit">Send</c.FormButton>
          </Form>
        )}
      </Formik>
    </c.BookFormWrapper>
  );
};

// import { Formik, Form } from 'formik';
// import * as c from './BookForm.styled';
// import * as Yup from 'yup';
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

// const emailPattern = /^[a-z0-9._%+-]+@[a-zA-Z0-9]+.[a-zA-Z0-9]+$/;

// const validationSchema = Yup.object().shape({
//   name: Yup.string()
//     .trim()
//     .min(2, 'Name must contain at least 2 characters')
//     .max(40, 'Too long name')
//     .required('Name is required'),
//   email: Yup.string()
//     .trim()
//     .matches(
//       emailPattern,
//       'Please enter a valid email! For example jane@mail.com'
//     )
//     .required('Email is required'),
//   bookingDate: Yup.date()
//     .min(new Date(), 'Booking date must be in the future')
//     .max(new Date('2025-12-31'), 'Booking date is too far in the future')
//     .required('Booking date is required'),
// });

// export const BookForm = () => {
//   return (
//     <c.BookFormWrapper>
//       <c.FormTitle>Book your campervan now</c.FormTitle>
//       <c.BookFormText>
//         Stay connected! We are always ready to help you.
//       </c.BookFormText>
//       <Formik
//         initialValues={{
//           name: '',
//           email: '',
//           bookingDate: '',
//           comment: '',
//         }}
//         validationSchema={validationSchema}
//         onSubmit={(values, actions) => {
//           actions.setSubmitting(true);
//           actions.resetForm();
//           window.location.reload();
//         }}
//       >
//         <Form>
//           <c.InputWrapper>
//             <c.FormGroup>
//               <c.Field name="name" type="text" placeholder="Name" />
//               <c.ErrorMessage name="name" component="span" required />
//             </c.FormGroup>

//             <c.FormGroup>
//               <c.Field name="email" type="email" placeholder="Email" />
//               <c.ErrorMessage name="email" component="span" required />
//             </c.FormGroup>

//             <c.FormGroup>
//               <c.Field
//                 name="bookingDate"
//                 type="date"
//                 placeholder="Booking date"
//               />
//               <c.ErrorMessage name="bookingDate" component="span" required />
//             </c.FormGroup>

//             <c.FormGroup>
//               <c.Field
//                 as="textarea"
//                 name="comment"
//                 type="text"
//                 placeholder="Comment"
//                 style={{ height: '114px', resize: 'none' }}
//               />
//             </c.FormGroup>
//           </c.InputWrapper>

//           <c.FormButton type="submit">Send</c.FormButton>
//         </Form>
//       </Formik>
//     </c.BookFormWrapper>
//   );
// };
