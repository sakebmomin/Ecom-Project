import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return (
    <Wrapper>
    <h2 className="common-heading">Feel Free To Contact Us</h2>

    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15129.045285573293!2d73.
    9079609850591!3d18.56225379914242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.
    1!3m3!1m2!1s0x3bc2c1416b608a23%3A0x463d0c82828e78b7!2sPhoenix%20Marketcity%2
    C%20207%2C%20Viman%20Nagar%20Rd%2C%20Clover%20Park%2C%20Viman%20Nagar%2
    C%20Pune%2C%20Maharashtra%20411014!5e0!3m2!1sen!2sin!4v1672823876613!5m2!1sen!2sin" 
    width="100%" 
    height="600" 
    style={{border:0}} 
    allowFullScreen="" 
    loading="lazy" 
    referrerPolicy="no-referrer-when-downgrade"></iframe>

    <div className="container">
      <div className="contact-form">
        <form action="https://formspree.io/f/moqzqeow" method="POST" className="contact-inputs">
          <input type="text" placeholder="username" name="username" required autoComplete="off"/>
          <input type="email" placeholder="Email" name="Email" required autoComplete="off"/>
          <textarea name="Message" cols="30" rows="10" required autoComplete="off" placeholder="Enter your message "/>
          <input type="submit" value="send"/>
        </form>
      </div>
    </div>

    </Wrapper>
  );

};

export default Contact;
