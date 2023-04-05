import { useSelector } from 'react-redux'
import User from './User'
import './Users.css'
import { FallingLines } from 'react-loader-spinner'

const UsersList = () => {
  const users = useSelector(state => state.usersReducer)
  return (
    <div className='user-list-container'>
      {
        users === null ? (
          <div className="loader">
            <FallingLines
              color="#ef8236"
              width="100"
              visible={true}
              ariaLabel='falling-lines-loading'
            />
          </div>
        ) : (
          <>
            {users.map(user => (
              <User user={user} key={user?._id} />
            ))}
          </>
        )
      }
    </div>
  )
}

export default UsersList