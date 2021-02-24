import logout from "app/auth/mutations/logout"
import { Link, useMutation } from "blitz"
import React from "react"
import { useCurrentUser } from "../hooks/useCurrentUser"

const UserInfo = () => {
    const currentUser = useCurrentUser()
    const [logoutMutation] = useMutation(logout)
  
    if (currentUser) {
      return (
        <>
          <button
            className="button small"
            onClick={async () => {
              await logoutMutation()
            }}
          >
            Logout
          </button>
          <div>
            User id: <code>{currentUser.id}</code>
            <br />
            User role: <code>{currentUser.role}</code>
          </div>
        </>
      )
    } else {
      return (
        <div className="space-x-4">
          <Link href="/signup3d">
            <a className="bg-deep-purple hover:bg-purple-700 p-2 text-white rounded">
              <strong>Sign Up</strong>
            </a>
          </Link>
          <Link href="/login3d">
            <a className="bg-deep-purple hover:bg-purple-700 p-2 text-white rounded">
              <strong>Login</strong>
            </a>
          </Link>
        </div>
      )
    }
  }

  export default UserInfo