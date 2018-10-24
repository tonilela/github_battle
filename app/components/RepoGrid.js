import React from 'react'
import PropTypes from 'prop-types'

const RepoGrid = ({repos}) =>{
    return(
        <ul className='popular-list'>
            {repos.map(function(repo,index){
              return (
                <li key={repo.name} className='popular-item'>
                <div className='popular-rank'>
                  #{index+1}
                </div>
                <ul className='space-list'>
                  <li>
                    <img className='avatar' style={{width: '150px'}} src={repo.owner.avatar_url}/>
                  </li>
                  <li>
                    <a href={repo.html_url}>{repo.name}</a>
                  </li>
                  <li>
                    @{repo.owner.login}
                  </li>
                  <li>
                    {repo.staregazers_count} stars 
                  </li>

                </ul>
              </li>
              )
            })}
        </ul>
    )
}

RepoGrid.propTypes = {
  repos: PropTypes.array.isRequired
}

export default RepoGrid