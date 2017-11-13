import React, { Component } from 'react';

export default class Rec extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: false,
      data: null,
    }
  }

  componentWillMount() {
    this.getRecommendations();
  }

  getAccessToken() {
    const grant_type = 'client_credentials';
    const client_id = 'Ufl-uhUVby20tr6azj6LGA';
    const client_secret = 'xHidkIIn0WJsMhjlUyBKFUrNLdFqnuKudjrvbVFozUFnH7zzM6fzLId9Ml3Cvy7b';

    this.setState({ loading: true, error: false });
    const body = `grant_type=${encodeURIComponent(grant_type)}&client_id=${encodeURIComponent(client_id)}&client_secret=${encodeURIComponent(client_secret)}`;
    const request = fetch('/api/yelp/oauth2/token', {
      method: 'POST',
      body,
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    });

    return request.then(res => res.json())
  }

  getRecommendations() {
    this.getAccessToken().then((token) => {
      const body = { term: 'restaurants', location: 'New York City', limit: 14 };
      const params = Object.entries(body).reduce((acum, [key, value]) => `${acum}&${encodeURIComponent(key)}=${encodeURIComponent(value)}`, '')
      const request = fetch(`/api/yelp/v3/businesses/search${params.replace(/^&/, '?')}`, {
        body,
        headers: { Authorization: `${token.token_type} ${token.access_token}` }
      });
      
      return request
        .then(res => res.json())
        .then(json => { this.setState({ loading: false, data: json }); return json; })
        .catch((error) => { this.setState({ loading: false, error: true }); throw error; });
    });
  }

  //lifecycle methods

  render() {
    const { loading, error, data } = this.state;
    if (loading) return null;
    if (error) return <div>Something went wrong!</div>;

    return (
      <div className="rec-container">
        <ul className="rec-content">
        {data && data.businesses.map(res => (
          <li key={res.id} className="rec-grid">
            <a href={res.url} className="res-title"><i className="fa fa-cutlery" aria-hidden="true" /> {res.name}</a>
            <p>Price: {res.price}, Rating: {res.rating}, Location: {res.location.address1}</p>
          </li>
        ))}
        </ul>
      </div>
    )
  }
}