import SearchBar from "../SearchBar/SearchBar";
import MainLogo from "../../common/MainLogo/MainLogo";


function HomeHeader() {
    return (
      <MainWrap>
        <Content>
          <FirstWrap>
            <StyledLogo>
              <MainLogo width={110} />
            </StyledLogo>
            <Join>
              <NavLink href="/join-as-tour-provider">
                Join as a tour provider
              </NavLink>
            </Join>
          </FirstWrap>
          <SecondWrap>
            <div>
              <Bolder>SKIP THE TOURIST TRAPS</Bolder>
              <H1>Insider tips & tours by real locals</H1>
            </div>
  
            <Search>
              <SearchBar placeholder="Enter city name" />
            </Search>
  
            <TryOut>
              Maybe try<CityLink href="/munich"> Munich </CityLink>,
              <CityLink href="/new-york">New York </CityLink>or{" "}
              <CityLink href="/vienna"> Vienna</CityLink>?
            </TryOut>
          </SecondWrap>
        </Content>
        <GradientCover />
      </MainWrap>
    );
  }
  
  export default HomeHeader;