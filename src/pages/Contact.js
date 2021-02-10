import React from 'react';

import { Layout } from '..layout';

const Contact = () => (
  <div>
      <form className='flex-col space-y-5 w-1/2 m-auto'>
        <div className='flex flex-col text left'>
        <label>Name</label>
        <input type='text' />
        </div>

        <div>
        <label>Email:<label>
        <input class type='text' />
        </div>

        <div>
        <label>Message</label>
        <input type='text' />
        <textarea></textarea>
        </div>
      </form>
      </div>
);

export default Contact;
