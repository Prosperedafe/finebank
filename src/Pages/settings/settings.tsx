import './setting.css';
import Picture from './assest/Picture.svg';
import { FC, useState } from "react";
import { PagesHeader } from '../../components/dashboard/header';

export const Settings: FC = () => {

  const fn = JSON.parse(localStorage.getItem("fb/fn/") as string)
  const ln = JSON.parse(localStorage.getItem("fb/ln/") as string)
  const em = JSON.parse(localStorage.getItem("fb/em/") as string)

  const [tab, setTab] = useState<number>(1);
  return (
    <>
      <PagesHeader />
      <section className='settings'>
        <div className='setting'>
          <hgroup>
            <button onClick={() => setTab(1)} className={tab === 1 ? 'current' : ''}>Account</button>
            <button onClick={() => setTab(2)} className={tab === 2 ? 'current' : ''}>Security</button>
          </hgroup>
        </div>
        {
          tab === 1 &&
          <div className='settings__account'>
            <div>
              <form>
                <label htmlFor='name' id="name">Full name</label><br></br>
                <input type="name" id="name" placeholder={`${fn} ${ln}`} /><br></br>
                <label htmlFor='email' id="text">Email</label><br></br>
                <input type="email" id="text" placeholder={em} /><br></br>
                <label htmlFor='name' id="name">Username</label><br></br>
                <input type="UName" id="name" placeholder='tanzir.rahman' /><br></br>
                <label htmlFor='number' id="number"></label>Phone Number<br></br>
                <input type="number" id="number" placeholder='+880  |  51547 58868' />
              </form>
              <button className='update'>Update Profile</button>
            </div>
            <div className="profile">
              <h3>Your Profile Picture</h3>
              <figure>
                <img src={Picture} alt="" />
              </figure>
            </div>
          </div>
        }
        {tab === 2 &&
          <>
            <form className='settings__security'>
              <label htmlFor="text" id="text">Old Password</label><br></br>
              <input type="Pword" id="text" placeholder='************' /><br></br>
              <label htmlFor="text" id="text">New Password</label><br></br>
              <input type="Pword" id="text" placeholder='************' /><br></br>
              <label htmlFor="text" id="text">Retype Password</label><br></br>
              <input type="Pword" id="text" placeholder='************' /><br></br>
              <label htmlFor="number" id="number">Phone Number </label><br></br>
              <input type="number" id="number" placeholder='+880  |  51547 588698' /><br></br>
            </form>
            <button className='update'>Update Password</button>
          </>
        }
      </section>
    </>
  )
}
export default Settings;