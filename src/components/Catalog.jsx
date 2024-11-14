import { useState } from 'react';
import products from '../productsData';
import { useNavigate } from 'react-router-dom';
import './styles/Catalog.css';

const Catalog = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [sortOption, setSortOption] = useState('');
    const [modalProduct, setModalProduct] = useState(null);

    const navigate = useNavigate();

    const filteredProducts = products
        .filter((product) =>
            product.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .filter((product) =>
            selectedCategory ? product.category === selectedCategory : true
        );

    // Сортировка товаров
    const sortedProducts = filteredProducts.sort((a, b) => {
        if (sortOption === 'price-asc') return a.price - b.price;
        if (sortOption === 'price-desc') return b.price - a.price;
        if (sortOption === 'stock-asc') return a.stock - b.stock;
        if (sortOption === 'stock-desc') return b.stock - a.stock;
        return 0;
    });

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    const handleSortChange = (e) => {
        setSortOption(e.target.value);
    };


    const handleOrderClick = (product) => {
        setModalProduct(product);
    };

    const closeModal = () => {
        setModalProduct(null);
    };

    const handleProductClick = (id) => {
        navigate(`/product/${id}`);
    };

    return (
        <div className="catalog container">
            <div className="header-container">
                <h2 className="title">Каталог товаров</h2>
            </div>
            
            <div className="d-flex">
            <div className="category-filter">
                <button onClick={() => handleCategoryChange('')}>Все категории</button>
                <button onClick={() => handleCategoryChange('Обычные')}>Обычные</button>
                <button onClick={() => handleCategoryChange('Плотные')}>Плотные</button>
            </div>

            <div className="searching">
            </div>


            <select onChange={handleSortChange} className="sort-select">
                <option value="">Сортировка</option>
                <option value="price-asc">Цена: по возрастанию</option>
                <option value="price-desc">Цена: по убыванию</option>
                <option value="stock-asc">Остаток: по возрастанию</option>
                <option value="stock-desc">Остаток: по убыванию</option>
            </select>

            <input
                type="text"
                placeholder="Поиск товаров..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
            />

            </div>

            {sortedProducts.length > 0 ? (
                <div className="product-grid">
{sortedProducts.map((product) => (
    <div
        className="product-card"
        key={product.id}
        onClick={() => handleProductClick(product.id)}
    >
        <img
            src={product.image}
            alt={product.title}
            className="product-image"
        />
        <h3>{product.title}</h3>
        <div className="row">
            <p>{product.price} ₽</p>
            <p>Остаток: {product.stock}</p>
        </div>
        <div className="button-group">
            {product.stock > 0 ? (
                <button
                    className="add-to-cart-button"
                    onClick={(e) => {
                        e.stopPropagation();
                    }}
                >
                    В корзину
                </button>
            ) : (
                <button
                    className="order-button"
                    onClick={(e) => {
                        e.stopPropagation();
                        handleOrderClick(product);
                    }}
                >
                    Заказать
                </button>
            )}
            <button
                className="order-button"
                onClick={(e) => {
                    e.stopPropagation();
                    handleProductClick(product.id);
                }}
            >
                Подробнее
            </button>
        </div>
    </div>
))}

                </div>
            ) : (
                <div className="no-results">
                    Товары не найдены
                </div>
            )}

            {modalProduct && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal" onClick={(e) => e.stopPropagation()}>
                        <h3>Заказать {modalProduct.title}</h3>
                        <form>
                            <input type="text" placeholder="Ваше ФИО" required />
                            <input type="text" placeholder="Ваш телефон" required />
                            <button type="submit">Отправить заявку</button>
                        </form>
                        <button className="close-button" onClick={closeModal}>
                            Закрыть
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Catalog;
