import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import MoonMp4 from '../../Midia/moon.mp4';
import BoardNoticeModal from '../FriendBoard/BoardNoticeModal.jsx';
import NewBoardInput from './NewBoardInput.jsx';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    margin: 0;
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center; /* 세로 중앙 정렬 */
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
    margin: 0; /* 가운데 정렬 */
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
        `
            background-color: #6b90d4;
            font-weight: bold;
        `}
`;

const FriendBoard = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isNewBoardInputOpen, setIsNewBoardInputOpen] = useState(false); // State for the "New Post" modal
    const [selectedPost, setSelectedPost] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredPosts, setFilteredPosts] = useState([]);
    const [posts, setPosts] = useState([]);

    const postsPerPage = 10;

    // Fetch posts from backend (API call)
    const fetchPosts = async () => {
        try {
            const response = await axios.get('https://polychat.fun:18000/api/friendBoard/listView');

            const formatter = new Intl.DateTimeFormat('ko-KR', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: false,
            });

            const postsWithFormattedDates = response.data.map(post => ({
                ...post,
                date: formatter.format(new Date(post.date)) // Format to 년 월 일 시 분 초
            }));

            setPosts(postsWithFormattedDates); // Set formatted posts in state
        } catch (error) {
            console.error("Error fetching posts:", error);
            setPosts([]); // Set to an empty array in case of error
        }
    };


    useEffect(() => {
        fetchPosts(); // Fetch posts when component mounts
    }, []);

    const handleAddPost = () => {
        fetchPosts(); // Re-fetch posts after adding a new post
    };

    const handleSearch = () => {
        const searchResults = posts.filter(post => post.title.includes(searchTerm));
        setFilteredPosts(searchResults);
        setCurrentPage(1);
    };

    const handleReset = () => {
        setFilteredPosts([]);
        setSearchTerm('');
        setCurrentPage(1);
    };

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = filteredPosts.length > 0 ? filteredPosts.slice(indexOfFirstPost, indexOfLastPost) : posts.slice(indexOfFirstPost, indexOfLastPost);

    const totalPages = Math.ceil((filteredPosts.length > 0 ? filteredPosts.length : posts.length) / postsPerPage);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const handleRowClick = (post) => {
        setSelectedPost(post);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedPost(null);
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
                    <WriteButton onClick={() => setIsNewBoardInputOpen(true)}>작성</WriteButton>
                    <ResetButton onClick={handleReset}>원상복귀</ResetButton>
                </SearchContainer>
                <Table>
                    <TableHeader>
                        <TableData>번호</TableData>
                        <TableData>제목</TableData>
                        <TableData>이름</TableData>
                        <TableData>날짜</TableData>
                    </TableHeader>
                    {currentPosts.map((post, index) => (
                        <TableRow key={post.id} onClick={() => handleRowClick(post)}>
                            <TableData>{indexOfFirstPost + index + 1}</TableData>
                            <TableData>{post.title}</TableData>
                            <TableData>{post.userId}</TableData>
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
            <BoardNoticeModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                post={selectedPost}
                onDelete={(postId) => setPosts(posts.filter(post => post.id !== postId))}
            />
            <NewBoardInput
                isOpen={isNewBoardInputOpen}
                onClose={() => setIsNewBoardInputOpen(false)}
                onAddPost={handleAddPost} // Add post callback
            />
        </Container>
    );
};

export default FriendBoard;
