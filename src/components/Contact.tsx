import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col items-center mt-10 bg-black text-white">
      <p className="text-[2em] mt-10">Contact</p>
      <div className="flex w-[80%]">
        <div className="w-[50%] p-10">
          <p>
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
          </p>
          <p>
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
          </p>
          <p>
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
          </p>
          <p>
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
          </p>
        </div>
        <div className="w-[50%] p-10">
          <form action="/" method="POST">
            <label htmlFor="name">Name:</label>
            <br />
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-[100%]"
            />
            <br />
            <br />
            <label htmlFor="mail">Mail:</label>
            <br />
            <input
              type="text"
              id="mail"
              name="mail"
              required
              className="w-[100%]"
            />
            <br />
            <br />
            <label htmlFor="message">Message:</label>
            <br />
            <textarea
              id="message"
              name="message"
              required
              className="w-[100%]"
            />
            <br />
            <br />
            <input type="submit" value={"SEND"} className="border h-[50px] w-[200px]" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
