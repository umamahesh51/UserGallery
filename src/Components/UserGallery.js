import React from 'react';
import './style.css';
import UserCard from './UserCard/index.js'
class UserGallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            pageNumber: 0,
            isLoadding: false
        }
    }
    componentDidMount = () => {
        this.fetchUsers()
    }

    setLoadingState = (value) => {
        this.setState({
            isLoadding: value
        })
    }

    fetchUsers = () => {
        const pagesToFetch = this.state.pageNumber + 1
        this.setLoadingState(true)
        const url = `https://reqres.in/api/users?page=${pagesToFetch}`
        fetch(url, {
            METHOD: 'GET'
        }).then(response => {
            return response.json();
        }).then(result => {
            const newUsers = [...this.state.users, ...result.data]
            console.log(result.data);
            this.setState({
                users: newUsers,
                pageNumber: pagesToFetch,
                isLoadding: false
            })
        }).catch((error) => {
            this.setLoadingState(false)
        })
    }
    render() {
        return (
            <div className="container">
                <p className="title">----UserGallery----</p>
                <div className="show-area">{
                    this.state.users.map(user => {
                        return (<UserCard
                            key={user.id}
                            avatar={user.avatar}
                            first_name={user.first_name}
                            last_name={user.last_name}
                            email={user.email}
                        />)
                    })
                }
                </div>
                <div>
                {this.state.isLoadding ?
                    (
                        <span className="loading-text"> Loading...........</span>
                    ) :
                    (
                        <button className="load-btn" onClick={this.fetchUsers} hidden ={this.state.pageNumber > 1} > Load More</button>
                    )
                }
                </div>
            </div>
        )
    }
}
export default UserGallery;
