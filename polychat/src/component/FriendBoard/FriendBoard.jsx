import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import MoonMp4 from '../../Midia/moon.mp4';
import BoardNoticeModal from '../FriendBoard/BoardNoticeModal.jsx';
import NewBoardInput from './NewBoardInput.jsx';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    margin: 0;
    position: relative;
    overflow: hidden;
`;

const BackgroundVideo = styled.video`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
`;

const Content = styled.div`
    position: relative;
    z-index: 1;
    width: 80%;
    max-width: 800px;
    padding: 20px;
    box-sizing: border-box;
    background-color: rgba(115, 138, 224, 0.9);
    border-radius: 10px;
    color: white;
    margin: 0 auto;
`;

const Header = styled.h1`
    font-size: 24px;
    text-align: left;
    margin-bottom: 20px;
`;

const SearchContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 10px;
`;

const SearchInput = styled.input`
    width: 200px;
    padding: 5px;
    border-radius: 10px;
    border: none;
`;

const SearchButton = styled.button`
    padding: 5px 10px;
    margin-left: 5px;
    border-radius: 10px;
    border: none;
    background-color: white;
    cursor: pointer;
`;

const WriteButton = styled.button`
    padding: 5px 10px;
    margin-left: 10px;
    border-radius: 10px;
    border: none;
    background-color: white;
    cursor: pointer;
`;

const ResetButton = styled.button`
    padding: 5px 10px;
    margin-left: 10px;
    border-radius: 10px;
    border: none;
    background-color: #ff6b6b;
    color: white;
    cursor: pointer;
`;

const Table = styled.div`
    width: 100%;
    margin-bottom: 10px;
`;

const TableRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #3b7dbf;
    color: white;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 10px;
    cursor: pointer;

    ${(props) =>
        props.notice &&
        css`
            background-color: #6b90d4;
        `}

    &:hover {
        background-color: #2b8dd0;
    }
`;

const TableHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #37447e;
    color: white;
    padding: 10px;
    border-radius: 10px;
`;

const TableData = styled.div`
    text-align: center;
    width: 25%;
`;

const Pagination = styled.ul`
    display: flex;
    justify-content: center;
    list-style: none;
    padding: 0;
    margin-top: 20px;
    color: white;
`;

const PageItem = styled.li`
    margin: 0 5px;
    padding: 5px 10px;
    border-radius: 5px;
    background-color: #37447e;
    cursor: pointer;

    &:hover {
        background-color: #2b8dd0;
    }

    ${(props) =>
        props.active &&
        css`
            background-color: #6b90d4;
            font-weight: bold;
        `}
`;

const FriendBoard = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isNewBoardInputOpen, setIsNewBoardInputOpen] = useState(false);
    const [selectedPost, setSelectedPost] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredPosts, setFilteredPosts] = useState([]);
    const [posts, setPosts] = useState([
        { id: "#", title: '작성 공지', author: '관리자', date: '2024-09-26', content: '공지사항 내용', isAdmin: true },
        { id: 1, title: '동렬맨 키보드에 커피 올리다', author: '시바견', date: '2024-09-25', content: '춘식이가 기뻐합니다', isAdmin: false }, // Add content here
    ]);

    const postsPerPage = 10;

    // Separate admin posts and user posts
    const adminPosts = posts.filter(post => post.isAdmin);
    const userPosts = filteredPosts.length > 0 ? filteredPosts : posts.filter(post => !post.isAdmin);

    // Get posts for the current page
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = userPosts.slice(indexOfFirstPost, indexOfFirstPost + postsPerPage);

    // Calculate total pages
    const totalPages = Math.ceil(userPosts.length / postsPerPage);

    // Page change handler
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // Open modal handler
    const handleRowClick = (post) => {
        setSelectedPost(post);
        setIsModalOpen(true);
    };

    // Close modal handler
    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedPost(null);
    };

    // Handle search
    const handleSearch = () => {
        const searchResults = posts.filter(post => post.title.includes(searchTerm) && !post.isAdmin);
        setFilteredPosts(searchResults);
        setCurrentPage(1);
    };

    // Handle reset
    const handleReset = () => {
        setFilteredPosts([]);
        setSearchTerm('');
        setCurrentPage(1);
    };

    // Open NewBoardInput modal
    const handleWriteButtonClick = () => {
        setIsNewBoardInputOpen(true);
    };

    // Close NewBoardInput modal
    const handleCloseNewBoardInput = () => {
        setIsNewBoardInputOpen(false);
    };

    // Handle new post submission
    const handleAddPost = (newPost) => {
        setPosts((prevPosts) => [
            ...prevPosts,
            { id: prevPosts.length + 1, ...newPost, date: new Date().toISOString().split('T')[0], isAdmin: false, content: newPost.content }, // Ensure content is included
        ]);
        setIsNewBoardInputOpen(false);
    };


    return (
        <Container>
            <BackgroundVideo autoPlay loop muted>
                <source src={MoonMp4} type="video/mp4" />
            </BackgroundVideo>
            <Content>
                <Header>PolyChat</Header>
                <SearchContainer>
                    <SearchInput
                        placeholder="검색"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <SearchButton onClick={handleSearch}>검색</SearchButton>
                    <WriteButton onClick={handleWriteButtonClick}>작성</WriteButton> {/* Open NewBoardInput */}
                    <ResetButton onClick={handleReset}>원상복귀</ResetButton>
                </SearchContainer>
                <Table>
                    <TableHeader>
                        <TableData>번호</TableData>
                        <TableData>제목</TableData>
                        <TableData>이름</TableData>
                        <TableData>날짜</TableData>
                    </TableHeader>
                    {adminPosts.map((post) => (
                        <TableRow
                            key={post.id}
                            notice={post.id === "#"}
                            onClick={() => handleRowClick(post)}
                        >
                            <TableData>#</TableData>
                            <TableData>{post.title}</TableData>
                            <TableData>{post.author}</TableData>
                            <TableData>{post.date}</TableData>
                        </TableRow>
                    ))}
                    {currentPosts.map((post, index) => (
                        <TableRow
                            key={post.id}
                            onClick={() => handleRowClick(post)}
                        >
                            <TableData>{indexOfFirstPost + index + 1}</TableData>
                            <TableData>{post.title}</TableData>
                            <TableData>{post.author}</TableData>
                            <TableData>{post.date}</TableData>
                        </TableRow>
                    ))}
                </Table>
                <Pagination>
                    {Array.from({ length: totalPages }, (_, i) => (
                        <PageItem
                            key={i + 1}
                            active={i + 1 === currentPage}
                            onClick={() => paginate(i + 1)}
                        >
                            {i + 1}
                        </PageItem>
                    ))}
                </Pagination>
            </Content>
            <BoardNoticeModal isOpen={isModalOpen} onClose={handleCloseModal} post={selectedPost} />
            <NewBoardInput
                isOpen={isNewBoardInputOpen}
                onClose={handleCloseNewBoardInput}
                onAddPost={handleAddPost}
            />
        </Container>
    );
};

export default FriendBoard;
