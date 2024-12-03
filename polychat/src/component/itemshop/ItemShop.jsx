import React from 'react';
import styled from 'styled-components';

const ShopContainer = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
    text-align: center;
    margin-bottom: 20px;
    color: #333;
`;

const ItemList = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
`;

const ItemCard = styled.div`
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s;

    &:hover {
        transform: translateY(-5px);
    }
`;

const ItemImage = styled.div`
    width: 150px;
    height: 150px;
    background-color: #e0e0e0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    color: #888;
    border-radius: 5px;
    margin-bottom: 10px;
`;

const ItemName = styled.p`
    font-weight: bold;
    margin:
    10px 0;
    color: #555;
`;

const ItemPrice = styled.span`
    color: #007bff;
    font-weight: bold;
`;

export const ItemShop = () => {
    const items = [
        { id: 1, name: 'Sword', price: 100 },
        { id: 2, name: 'Shield', price: 150 },
        { id: 3, name: 'Potion', price: 50 },
        { id: 4, name: 'Helmet', price: 120 },
    ];

    return (
        <ShopContainer>
            <Title>Item Shop</Title>
            <ItemList>
                {items.map((item) => (
                    <ItemCard key={item.id}>
                        <ItemImage>No Image</ItemImage>
                        <ItemName>{item.name}</ItemName>
                        <ItemPrice>${item.price}</ItemPrice>
                    </ItemCard>
                ))}
            </ItemList>
        </ShopContainer>
    );
};
