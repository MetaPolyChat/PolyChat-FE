import React from 'react';
import styled from 'styled-components';
import MoonMp4 from '../../Midia/moon.mp4';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    margin: 0;
    position: relative;
    overflow: hidden;
`;

const BackgroundVideo = styled.video`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
    transform: translate(-50%, -50%);
`;

const Content = styled.div`
    position: relative;
    z-index: 1;
    padding: 20px;
    height: 100%;
    box-sizing: border-box;
    background-color: rgba(0, 0, 0, 0.5); /* Optional: To add a slight overlay */
    color: white; /* Ensures text is visible over video */
`;

const Header = styled.h1`
    font-size: 24px;
    text-align: left;
    margin-bottom: 20px;
`;

const SearchContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 10px;
`;

const SearchInput = styled.input`
    width: 200px;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid #ccc;
`;

const SearchButton = styled.button`
    padding: 5px 10px;
    margin-left: 5px;
    border-radius: 5px;
    border: none;
    background-color: #ffffff;
    cursor: pointer;
`;

const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 10px;
`;

const TableHeader = styled.th`
    background-color: #37447e;
    color: white;
    padding: 10px;
    border-bottom: 1px solid #3b7dbf;
`;

const TableRow = styled.tr`
    background-color: #3b7dbf;
    color: white;
    &:nth-child(even) {
        background-color: #2b8dd0;
    }
`;

const TableData = styled.td`
    padding: 10px;
    text-align: center;
`;

const Pagination = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 10px;
`;

const PageNumber = styled.span`
    margin: 0 5px;
    cursor: pointer;
    &:hover {
        color: #bbb;
    }
`;

const WriteButton = styled.button`
    position: fixed;
    bottom: 20px;
    right: 20px;
    padding: 10px 20px;
    border-radius: 5px;
    border: none;
    background-color: #ffffff;
    cursor: pointer;
`;

const FriendBoard = () => {
    return (
        <Container>
            <BackgroundVideo autoPlay loop muted>
                <source src={MoonMp4} type="video/mp4" />
                Your browser does not support the video tag.
            </BackgroundVideo>
            <Content>
                <Header>PolyChat</Header>
                <SearchContainer>
                    <SearchInput placeholder="Search..." />
                    <SearchButton>검색</SearchButton>
                </SearchContainer>
                <Table>
                    <thead>
                    <tr>
                        <TableHeader>번호</TableHeader>
                        <TableHeader>제목</TableHeader>
                        <TableHeader>이름</TableHeader>
                        <TableHeader>날짜</TableHeader>
                    </tr>
                    </thead>
                    <tbody>
                    <TableRow>
                        <TableData>#</TableData>
                        <TableData>작성 공지</TableData>
                        <TableData>신창섭</TableData>
                        <TableData>2024-04-04</TableData>
                    </TableRow>
                    <TableRow>
                        <TableData>1</TableData>
                        <TableData>동력맨 키보드에 커피 올리다</TableData>
                        <TableData>시바견</TableData>
                        <TableData>2024-09-25</TableData>
                    </TableRow>
                    </tbody>
                </Table>
                <Pagination>
                    {Array.from({ length: 10 }, (_, i) => (
                        <PageNumber key={i + 1}>{i + 1}</PageNumber>
                    ))}
                </Pagination>
                <WriteButton>작성</WriteButton>
            </Content>
        </Container>
    );
};

export default FriendBoard;



