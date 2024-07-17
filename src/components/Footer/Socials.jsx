import React from 'react'
import { Linkedin, Link  } from 'lucide-react';

const Socials = () => {
  return (
    <div className='flex flex-row gap-x-5'>
        <ul className='flex flex-row justify-center items-center gap-x-2'>
          <li>
            <a href='https://www.facebook.com/KaveGuild' target='_blank'>
              <img src="/facebook.svg" alt="" />
            </a>
          </li>
          <li>
            <a href='https://www.linkedin.com/company/kave-blocks/' target='_blank'>
              <img src="/linkedin.svg" alt="" />
            </a>
          </li>
          <li>
            <a href='https://linktr.ee/kaveguild' target='_blank'>
              <Link />
            </a>
          </li>
          <li>
            <a href='https://www.linkedin.com/company/kave-blocks/' target='_blank'>
              <Linkedin />
            </a>
          </li>
        </ul>
    </div>
  )
}

export default Socials
