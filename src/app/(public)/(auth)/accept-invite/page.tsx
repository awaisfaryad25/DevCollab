import React from 'react'
import MainLogo from '../../components/MainLogo'
import BackgroundGradient from '@/app/ui/background-gradient'

const AcceptInvite = () => {
  return (
    <div className="relative min-h-screen px-4 py-6">
      <div className="w-full max-w-7xl mx-auto">
        <MainLogo/>
      </div>
      <BackgroundGradient/>
      <div className="p-4 w-full max-w-sm mx-auto mt-6 lg:mt-10">
        <div className="mb-4">
          <h1 className="text-2xl lg:text-3xl font-semibold text-foreground">
            You're invited!
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
              You've been invited to join the{" "}
              <span className="font-semibold text-foreground">
                DevCollab
              </span>{" "}
              workspace.
            </p>
        </div>
      </div>
      page
    </div>
  )
}

export default AcceptInvite