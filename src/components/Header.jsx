"use client"

import { Box, Typography, Container, IconButton, TextField } from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom" // Added useNavigate
import "./Header.css"

// Sample product data for search functionality
// In a real application, this would come from your API or context
const products = [
  { id: 1, name: "Blonde Bob Wig", category: "wigs" },
  { id: 2, name: "Curly Brown Wig", category: "wigs" },
  { id: 3, name: "Long Black Wig", category: "wigs" },
  { id: 4, name: "Premium Hair Oil", category: "products" },
  { id: 5, name: "Hair Gel", category: "products" },
  { id: 6, name: "Moisturizing Shampoo", category: "products" },
  { id: 7, name: "Natural Afro Wig", category: "collections" },
  { id: 8, name: "Swiss Curly Wig", category: "collections" },
  { id: 9, name: "Full Lace Frontal Bob Wig", category: "collections" },
]

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState([])
  const [showResults, setShowResults] = useState(false)
  const navigate = useNavigate()

  // Search functionality
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setSearchResults([])
      setShowResults(false)
      return
    }

    const filteredResults = products.filter((product) => product.name.toLowerCase().includes(searchQuery.toLowerCase()))

    setSearchResults(filteredResults)
    setShowResults(true)
  }, [searchQuery])

  const handleSearch = (event) => {
    event.preventDefault()
    if (searchQuery.trim()) {
      // Navigate to search results page with query parameter
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`)
      setShowResults(false)
    }
  }

  const handleResultClick = (result) => {
    // Navigate to the appropriate page based on the result
    navigate(`/${result.category}/${result.id}`)
    setSearchQuery("")
    setShowResults(false)
  }

  // Close search results when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setShowResults(false)
    }

    document.addEventListener("click", handleClickOutside)
    return () => {
      document.removeEventListener("click", handleClickOutside)
    }
  }, [])

  // Prevent clicks inside the search form from closing results
  const handleSearchContainerClick = (e) => {
    e.stopPropagation()
  }

  return (
    <header>
      <Container maxWidth="xl" className="header-container">
        <Box className="logo-container">
          <img
            src="https://i.pinimg.com/736x/0d/f8/71/0df871f87008d5fe410ba57eed7341cb.jpg"
            alt="MOBOTSANE Logo"
            className="logo"
          />
          <Typography variant="h6" className="brand-name">
            MOBOTSANE
          </Typography>
        </Box>
        <div className="search-container" onClick={handleSearchContainerClick}>
          <form onSubmit={handleSearch} className="search-form">
            <TextField
              variant="outlined"
              size="small"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            <IconButton type="submit" className="search-icon">
              <SearchIcon fontSize="small" />
            </IconButton>
          </form>

          {/* Search Results Dropdown */}
          {showResults && searchResults.length > 0 && (
            <div className="search-results">
              {searchResults.map((result) => (
                <div key={result.id} className="search-result-item" onClick={() => handleResultClick(result)}>
                  {result.name}
                </div>
              ))}
            </div>
          )}

          {/* No Results Message */}
          {showResults && searchQuery.trim() !== "" && searchResults.length === 0 && (
            <div className="search-results">
              <div className="search-result-item no-results">No results found for "{searchQuery}"</div>
            </div>
          )}
        </div>
      </Container>

      <Box className="nav-wrapper">
        <Container maxWidth="xl">
          <nav>
            <ul className="nav-menu">
              <li>
                <Link to="/" className="active">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/shop">Shop</Link>
              </li>
              <li>
                <Link to="/collections">Collections</Link>
              </li>
              <li>
                <Link to="/wigs" className="dropdown">
                  Wigs <ExpandMoreIcon fontSize="small" />
                </Link>
              </li>
            </ul>
          </nav>
        </Container>
      </Box>
    </header>
  )
}

export default Header

