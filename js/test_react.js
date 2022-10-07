function Sample(){
        return(
               <>
                  <WrapComponent/>
               </>
        )
}
// Wrap
class WrapComponent extends React.Component {
    render() {
        return (
            <>

                    <MainComponent/>

            </>
        );
    }
}

	
	// main
class MainComponent extends React.Component {
    render() {
        return (
            <>
			
			<div id="main_image">
                react test
			</div>
			
		   </>
        );
    }
}

	
	ReactDOM.render(
        <Sample/>,
        document.getElementById("root")
);
	