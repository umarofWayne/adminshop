        import GAListener from './components/GAListener';
        import { MainLayout } from './components/Layout';
        import PageSpinner from './components/PageSpinner';
        import React from 'react';
        import componentQueries from 'react-component-queries';
        import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
        import './styles/reduction.scss'; 
        import { Button, Form, FormGroup, Input, Label } from 'reactstrap'
        import { postContact } from './host/config';
        const ButtonGroupPage = React.lazy(() => import('./pages/ButtonGroupPage'));
        const Product  = React.lazy(() => import('./pages/Product'));
        const Subcategory = React.lazy(() => import('./pages/Subcategory'));
        const DashboardPage = React.lazy(() => import('./pages/DashboardPage'));
        const PromotionsPage = React.lazy(() => import('./pages/PromotionsPage'));


        class App extends React.Component {

          state={
            token:""
          }
          
            pushLogin=()=>{
              var data={
                  "username":document.querySelector('#login').value,
                  "password":document.querySelector('#Password').value
                }; 
              postContact(data).then(res=>{
                this.setState({token:res.data.key})
                  localStorage.setItem('token',res.data.key)
                }).catch(err=>{
              alert('noto`g`ri parol')
                })
          
              }
              componentDidMount(){
                // this.setState(token:localStorage.getItem('token'))
                // setTimeout(() => {
                //    localStorage.clear('token')
                // }, 100); 
              }
            render() {
          
              return (
            <div>
              {/* salom jigar */}
                { (!this.state.token)?(
              <div style={{width:'100vw',height:'100vh',display:'flex', justifyContent:'center',alignItems:'center' }}>
          
                <Form  style={{width:'300px'}}>
                
                    <div className="text-center pb-4">
                      iTeen
                    </div>
                
                  <FormGroup>
                    <Label for="login">User Name</Label>
                    <Input placeholder="your Login"  type="text" id="login" />
                  </FormGroup>
                  <FormGroup>
                    <Label for='Password'>Password</Label>
                    <Input type="password" id="Password"   placeholder='your password' />
                  </FormGroup>
              
            
                  <hr />
                  <Button
                    size="lg"
                    className="bg-gradient-theme-left border-0"
                    block
                    onClick={()=>this.pushLogin()}>
                    Login
                  </Button>
          
                </Form></div>):(
              <BrowserRouter >
                <GAListener>
                  <Switch>
              

                    <MainLayout>
                      <React.Suspense fallback={<PageSpinner />}> 
                        <Route exact path="/" component={DashboardPage} /> 
                        <Route exact path="/product" component={Product} />
                        <Route exact path="/category" component={ButtonGroupPage}/>
                        <Route exact path="/promotions" component={PromotionsPage} />
                        <Route exact path="/subcategory" component={Subcategory} />
                      </React.Suspense>
                    </MainLayout>
                    <Redirect to="/"/>
                  </Switch>
                </GAListener>
              </BrowserRouter>)}
              </div>
            );
          }
        }

        const query = ({ width }) => {
          if (width < 575) {
            return { breakpoint: 'xs' };
          }

          if (576 < width && width < 767) {
            return { breakpoint: 'sm' };
          }

          if (768 < width && width < 991) {
            return { breakpoint: 'md' };
          }

          if (992 < width && width < 1199) {
            return { breakpoint: 'lg' };
          }

          if (width > 1200) {
            return { breakpoint: 'xl' };
          }

          return { breakpoint: 'xs' };
        };

        export default componentQueries(query)(App);
