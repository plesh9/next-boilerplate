import type { FC } from 'react'
import { Button } from '@shared/ui/Button'

const page: FC = () => {
    return (
        <div
            className={`
              m-auto flex max-w-[540] grow flex-col items-center justify-center
              gap-4 text-center
            `}
        >
            <div className='flex flex-col gap-2'>
                <h1 className='text-4xl font-bold'>🚀 Next.js Boilerplate</h1>
                <p className='text-lg'>
                    A modern Next.js starter template with TypeScript, ESLint,
                    Prettier, Stylelint, Tailwind CSS, and ShadCN UI
                </p>
            </div>
            <Button>Let's go</Button>
        </div>
    )
}

export default page
