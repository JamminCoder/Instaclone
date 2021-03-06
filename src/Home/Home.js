import { ProfilePic } from '../Profile/Profile';
import { CommentButton, FollowLink, Icon, LikeButton } from '../Icons';
import { useState } from 'react';


export function YourProfile({ username }) {
    return (
        <div className='grid place-content-center [grid-template-columns:20%_60%_20%] text-sm mb-5'>
            <ProfilePic width={48} src={ `/img/profile/${ username }.jpg` }/>
            <div className='ml-2'>
                <a className='user-link' href={ `/${ username }` }>{ username }</a>
                <small className='text-gray-600'>Tim Batt</small>
            </div>
            <a className='user-link grid place-items-center text-blue-500 font-bold' href='/switch_profile'>Switch</a>
        </div>
    );
}

export function UserSuggestion({ username }) {
    return (
        <div className='my-3 grid place-content-center [grid-template-columns:20%_50%_30%] text-sm'>
            <ProfilePic width='40px' src={ `/img/profile/${ username }.jpg` }/>
            <div className='place-content-start ml-2'>
                <a className='user-link' href={ `/${ username }` }>{ username }</a>
                <small className='text-gray-600'>Followed by...</small>
                
            </div>
            {/* <a className='grid place-items-center text-blue-500 font-bold'>Follow</a> */}
            <FollowLink username={username} />
        </div>
    );
}

export function PostInfo(props) {
    return (
        <div>
            <div className='flex gap-3'>
                <LikeButton />
                <CommentButton />
            </div>
            <p className='mt-3'><b>15,000 likes</b></p>
        </div>
        
    );
}

export function Comment(props) {
    return (
        <div>
            <a className='hover:underline font-bold mr-2' href={ `/${ props.username }` }> { props.username } </a>
            <p className='inline'>{ props.children }</p>
        </div>
    );

}

export function PostPreviewContent(props) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [height, setHeight] = useState('3rem');
    const [contentOption, setContentOption] = useState('See More');

    function handleClick() {
        if (!isExpanded) {
            setHeight('auto');
            setIsExpanded(true);
            setContentOption('See Less');
        } else {
            setHeight('3rem');
            setIsExpanded(false);
            setContentOption('See More');
        }
    }

    return (
        <div>
            <div style={{ height: height }} className='overflow-hidden'>
                { props.children }
            </div>
            <p className='underline text-sm cursor-pointer mt-3 text-gray-600' onClick={ handleClick }>{ contentOption }</p>
        </div>
    );
}

export function PostPreview({ username }) {
    return (
        <section className='grid place-content-center border rounded-md max-w-[30rem] mb-10 bg-white'>
            <div className='p-3 flex [align-items:center] justify-between'>
                <div className='flex [align-items:center] gap-2'>
                    <ProfilePic width='32px' className='w-8' username={ username }/>
                    <p className='text-sm'>{ username }</p>
                </div>
            </div>


            <div className=''>
                <img src='/img/posts/panda.png' className='aspect-square max-h-[30rem]'/>
            </div>

            <div className='mt-3 p-3'>
                <PostInfo/>

                <PostPreviewContent>
                    <Comment username={ username }>
                        Notice the use of %PUBLIC_URL% in the tags above.
                        It will be replaced with the URL of the `public` folder during the build.
                        Only files inside the `public` folder can be referenced from the HTML.

                        Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
                        work correctly both with client-side routing and a non-root public URL.
                        Learn how to configure a non-root public URL by running `npm run build`.
                    </Comment>
                </PostPreviewContent>
            </div>

        </section>
    );
}


export function Suggestions(props) {
    return (
        <div className='absolute hidden md:block ml-9 w-[20rem]'>
            <YourProfile username='jammin_coder'/>

            <p className='text-gray-500 mb-2'>Suggestions For you</p>
            <UserSuggestion username='john_smith'/>
            <UserSuggestion username='chad_winston'/>
            <UserSuggestion username='mike'/>
        </div>
    );
}


export function HomePage(props) {
    return (
        <div className='page-wrapper'>
            <div className='page-content grid place-items-center md:place-items-start md:[grid-template-columns:50%_50%]'>
                <div>
                    <PostPreview username='jammin_coder'/>
                    <PostPreview username='john_smith'/>
                    <PostPreview username='jammin_coder'/>
                </div>

                <div>
                    
                    <Suggestions/>
                </div>
                
            </div>
            
        </div>
    );
}