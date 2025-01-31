import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { Button } from '@/components/elements/button';

interface BannerProps {
    className: string;
    title: string;
    action: string;
    link: string;
}

export default (props: BannerProps) => {
    const isExternalLink = props.link === 'credits';

    return (
        <div
            className={classNames(props.className, 'w-full bg-auto bg-center rounded-tr-xl rounded-bl-xl bg-gray-800')}
        >
            <div className={'bg-gray-900 bg-opacity-75 text-center rounded-lg p-2 m-2 lg:mt-[40rem]'}>
                <p className={'text-3xl text-gray-200'}>{props.title}</p>
                {isExternalLink ? (
                    <a href="https://expohost.in/renew-server/" target="_blank" rel="noopener noreferrer">
                        <Button className={'my-2 w-full lg:w-1/2'}>{props.action}</Button>
                    </a>
                ) : (
                    <Link to={`/store/${props.link}`}>
                        <Button className={'my-2 w-full lg:w-1/2'}>{props.action}</Button>
                    </Link>
                )}
            </div>
        </div>
    );
};
