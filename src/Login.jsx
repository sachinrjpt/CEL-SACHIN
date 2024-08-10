const Login = () => {
    return (
      <>
        <div className="content" style={{ textAlign: "center", padding: "20px" }}>
          <h2>Welcome to Central Electronics Limited ERP Portal!</h2>
          <div
            style={{
              display: "flex",
              gap: "10px",
              justifyContent: "center",
              paddingTop: "20px",
            }}
          >
            <a className="button">
              Create Your Master
            </a>
            <a className="button">
              Update Your Master
            </a>
            <a className="button">
              Search Your Request
            </a>
            <a className="button">
              Raise Your ERP Issues
            </a>
          </div>
        </div>
      </>
    );
  };
  
  export default Login;