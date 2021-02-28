import React from 'react';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import ReactDom from 'react-dom';
import faker from 'faker';

const App = () => {
    return (
        <div className='ui container comments'>
            <ApprovalCard>
                <CommentDetail
                    author='Sam'
                    timeAgo='Today at 04:45PM'
                    content='This is a great blog post'
                    avatar={faker.image.image()}
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    author='Alex'
                    timeAgo='Today at 02:00AM'
                    content='Love It'
                    avatar={faker.image.image()}
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    author='Jane'
                    timeAgo='Yesterday at 10:45PM'
                    content='Amazing!!!!'
                    avatar={faker.image.image()}
                />
            </ApprovalCard>
        </div>
    );
};

ReactDom.render(<App />, document.querySelector('#root'));
