import React, { useState } from "react";
import styled from "styled-components";
import midiaBackground from "../../Midia/univerBackground.mp4";

// 배경 비디오 스타일
const BackgroundVideo = styled.video`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
`;

// 전체 레이아웃
const LayoutContainer = styled.div`
    display: flex;
    flex-direction: row;
    padding: 20px;
    gap: 20px;
    color: white;
    min-height: 100vh;
`;

// 카드 스타일 (투명한 검은색 배경)
const Card = styled.div`
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

// 검색 섹션
const SearchSection = styled(Card)`
    flex: 1;
`;

const SearchInput = styled.input`
    padding: 10px;
    border-radius: 5px;
    border: none;
    background-color: rgba(255, 255, 255, 0.1);
    color: white;

    &:focus {
        outline: none;
    }
`;

const SearchButton = styled.button`
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: rgba(255, 255, 255, 0.2);
    color: white;
    cursor: pointer;

    &:hover {
        background-color: rgba(255, 255, 255, 0.4);
    }
`;

// 메인 게시판
const BoardContainer = styled(Card)`
    flex: 2;
`;

const NoData = styled.div`
    text-align: center;
    color: rgba(255, 255, 255, 0.7);
    font-size: 18px;
`;

// 친구 추천 섹션
const FriendRecommendation = styled(Card)`
    flex: 1;
`;

const FriendItem = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    color: white;
`;

const Button = styled.button`
    background-color: rgba(255, 255, 255, 0.2);
    color: white;
    border: none;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: rgba(255, 255, 255, 0.4);
    }
`;

export const SocialLayout = () => {
    const [posts, setPosts] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentPost, setCurrentPost] = useState({
        title: "",
        name: "",
        date: "",
        content: "",
        image: null,
    });

    const [interestSearch, setInterestSearch] = useState(""); // 관심사 검색 상태

    const handleOpenModal = () => {
        setCurrentPost({
            title: "",
            name: "",
            date: "",
            content: "",
            image: null,
        });
        setIsModalOpen(true);
    };

    const handleCloseModal = () => setIsModalOpen(false);

    const handlePostChange = (e) => {
        const { name, value } = e.target;
        setCurrentPost((prev) => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e) => {
        setCurrentPost((prev) => ({ ...prev, image: e.target.files[0] }));
    };

    const handleSubmitPost = () => {
        if (!currentPost.title || !currentPost.name || !currentPost.content) return;
        setPosts((prev) => [...prev, { ...currentPost, id: Date.now() }]);
        handleCloseModal();
    };

    return (
        <>
            <BackgroundVideo autoPlay muted loop>
                <source src={midiaBackground} type="video/mp4" />
                Your browser does not support the video tag.
            </BackgroundVideo>

            <LayoutContainer>
                {/* 검색 섹션 */}
                <SearchSection>
                    <SearchInput
                        placeholder="Search by keyword..."
                        onChange={(e) => setInterestSearch(e.target.value)}
                    />
                    <SearchButton>Search</SearchButton>
                    <SearchInput
                        placeholder="Search by interest..."
                        onChange={(e) => setInterestSearch(e.target.value)}
                    />
                    <SearchButton>Search by Interest</SearchButton>
                </SearchSection>

                {/* 메인 게시판 */}
                <BoardContainer>
                    <Button onClick={handleOpenModal}>Create Post</Button>
                    {posts.length === 0 ? (
                        <NoData>No Data</NoData>
                    ) : (
                        posts.map((post) => (
                            <div key={post.id}>
                                <h3>{post.title}</h3>
                                <p>
                                    {post.name} | {post.date}
                                </p>
                                <p>{post.content}</p>
                                {post.image && (
                                    <img
                                        src={URL.createObjectURL(post.image)}
                                        alt="Post"
                                        style={{ width: "100%", borderRadius: "10px" }}
                                    />
                                )}
                                <Button onClick={() => setPosts((prev) => prev.filter((p) => p.id !== post.id))}>
                                    Delete
                                </Button>
                            </div>
                        ))
                    )}
                </BoardContainer>

                {/* 친구 추천 섹션 */}
                <FriendRecommendation>
                    <h3>Friend Recommendation</h3>
                    <FriendItem>
                        <span>Profile 1</span>
                        <span>NickName 1</span>
                    </FriendItem>
                    <FriendItem>
                        <span>Profile 2</span>
                        <span>NickName 2</span>
                    </FriendItem>
                </FriendRecommendation>
            </LayoutContainer>

            {isModalOpen && (
                <ModalOverlay>
                    <ModalContent>
                        <h3>Create Post</h3>
                        <Input
                            name="title"
                            placeholder="Title"
                            value={currentPost.title}
                            onChange={handlePostChange}
                        />
                        <Input
                            name="name"
                            placeholder="Name"
                            value={currentPost.name}
                            onChange={handlePostChange}
                        />
                        <Input
                            name="date"
                            placeholder="Date"
                            value={currentPost.date}
                            onChange={handlePostChange}
                        />
                        <TextArea
                            name="content"
                            placeholder="Content"
                            rows="4"
                            value={currentPost.content}
                            onChange={handlePostChange}
                        />
                        <FileInput type="file" onChange={handleFileChange} />
                        <Button onClick={handleSubmitPost}>Submit</Button>
                        <Button onClick={handleCloseModal}>Cancel</Button>
                    </ModalContent>
                </ModalOverlay>
            )}
        </>
    );
};
