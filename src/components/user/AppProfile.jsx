import React, { useState, useEffect } from 'react';

const AppProfile = () => {
  const [image, setImage] = useState('col-4');
  const [info, setInfo] = useState('col-8');
  const [image01, setImage01] = useState('');

  useEffect(() => {
    if (window.screen.width < 900) {
      setImage('col-12');
      setInfo('col-12');
    }

  }, []);

  return (
    <div id="body">
      <div className="row">
        <h3 className="general-text">This is my information</h3>
        <hr />

        <div className={image}>
          <div className="image-user">
            <img
              src="https://res.cloudinary.com/dorqesogu/image/upload/v1684950584/utils/B612_20220428_120412_479_b8uu8d.jpg"
              alt="..."
              className="img-thumbnail w-50"
            />
          </div>
          <hr />
          <h4>Nilson Eduardo Escobar Vicente</h4>
          <p className="JetBrains">Computer System Engineering at University of El Salvador</p>
          <code className="text-secondary JetBrains">2019 - present</code>
        </div>

        <div className={info}>
          <h3 className="general-text">Resume</h3>
          <p className="text-size JetBrains">
            I am a proactive person, an excellent teammate, organized and responsible. I really enjoy learning new things focused on technology, so my goal is a challenging and dynamic position where I can share my experience and at the same time get new knowledge.
          </p>
          <hr />

          <div className="container m-3" id="persona-info">
            <h3 className="text-start general-text">Experience:</h3>

            <ul className="text-size">
              <h4 className="text-start general-text">Technical Support Agent</h4>
              <code className="text-secondary">
                <li className="list-group-item m-3 text-start text-size">
                  Providing Support to residential customers, with services like: TV, Internet and Phone lines
                </li>
              </code>

              <h4 className="text-start general-text"><strong>Support Center Specialist</strong></h4>
              <code className="text-start text-secondary">
                <li className="list-group-item text-start m-3 text-size">
                  Support for Dollarcity Stores with POS, Printers, Servers, Databases, phones (via remote)
                </li>
                <li className="list-group-item text-start m-3 text-size">
                  Support for coworkers such as administrative, financial, others areas
                </li>
                <li className="list-group-item text-start m-3 text-size">
                  Support for Dollarcity Stores with POS, Printers, Servers, Databases, phones (via remote)
                </li>
                <li className="list-group-item text-start m-3 text-size">
                  Creating users in Active Directory, Office 365 and providing different access and user configurations like VPN, Emails, SharePoint, FTP Paths, others.
                </li>
                <li className="list-group-item text-start m-3 text-size">
                  Network monitoring (Router, Switches, Network Link, ISP, Servers, Firewalls) with tool such as SolarWinds, Nagios, Cisco Meraki, Cisco Umbrella
                </li>
                <li className="list-group-item text-start m-3 text-size">
                  Developing Python and PowerShell scripts for executing remote tasks.
                </li>
                <li className="list-group-item text-start m-3 text-size">
                  Engaging in a project involving C# programming with a focus on WPF (Windows Presentation Foundation) alongside SQL integration.
                </li>
              </code>
            </ul>
            <br />

            <h4 className="text-start general-text JetBrains">Skills:</h4>
            <div className="row">
              <div className="col-12">
                <ul className="m-3 text-size JetBrains">
                  <li className="text-start text-size">HTML, CSS, JS</li>
                  <li className="text-start">PHP</li>
                  <li className="text-start">C# - .Net</li>
                  <li className="text-start">React JS</li>
                  <li className="text-start">Powershell - Scripting</li>
                  <li className="text-start">Python</li>
                  <li className="text-start">Node JS</li>
                  <li className="text-start">Angular</li>
                  <li className="text-start">O365 Admin</li>
                  <li className="text-start">Active Directory</li>
                  <li className="text-start">Windows Server</li>
                  <li className="text-start">Microsoft Azure</li>
                  <li className="text-start">Google Workspace</li>
                  <li className="text-start">AWS (S3, EC2, Route 53)</li>
                  <li className="text-start">SQL Server</li>
                  <li className="text-start">MySQL</li>
                  <li className="text-start">MongoDB</li>
                  <li className="text-start">TCP/IP</li>
                  <li className="text-start">Linux - Ubuntu</li>
                  <li className="text-start">Much More...</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppProfile;
