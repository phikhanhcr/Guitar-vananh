import React, { useEffect, useState } from 'react';


function Catalogs({ catalogs, groupFunc }) {
  const [group, setGroup] = useState([])
  useEffect(() => {
    async function fetchData() {
      await fetch('http://localhost:3000/api/group')
        .then(res => res.json())
        .then(data => {
          console.log(data)
          setGroup(data)
        }).catch(err => {
          console.log(err)
        })
    }
    fetchData();
  }, [])

  return (
    <div className="col-lg-3 col-md-4 col-sm-12">
      <div className="wrapper-catalogs shadow">
        <div className="wrapper-title ">
          <h4>Danh mục</h4>
        </div>
        <div class="accordion" id="accordionExample">
          {
            catalogs.length && catalogs.map(ele => (
              <div class="card">
                <div class="card-header" id={ele._id}>
                  <h2 class="mb-0 s20">
                    <button class="s20 btn btn-link btn-block link-ref text-left cl-f26522" type="button" data-toggle="collapse" data-target={`#collapse${ele._id}`} aria-expanded="true" aria-controls={`collapse${ele._id}`}>
                      {ele.name}
                    </button>
                  </h2>
                </div>

                <div id={`collapse${ele._id}`} class="collapse" aria-labelledby={ele._id} data-parent="#accordionExample">
                  <div class="card-body">
                    <ul>
                      {
                        group.filter(item => {
                          return item['catalog'].linkRef === ele.linkRef
                        }).map(i => (
                          <li className="cursor-pointer link-ref">
                            <p group={i.linkRef} onClick={(e) => groupFunc((e.target.getAttribute('group')))}>{i.name}</p>
                          </li>
                        ))
                      }
                    </ul>
                  </div>
                </div>
              </div>
            ))
          }




        </div>
      </div >
    </div >
  );
}

export default Catalogs;