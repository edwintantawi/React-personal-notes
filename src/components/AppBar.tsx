import React from 'react';
import { clsx } from 'clsx';
import { useLocation, useNavigate } from 'react-router-dom';
import { SearchIcon, XIcon, DotsHorizontalIcon, PlusIcon } from '@heroicons/react/solid';

import { Avatar } from './Avatar';
import { IconButton } from './IconButton';
import { TabBar, TabBars } from './Tabs';
import { Divider } from './Divider';
import { InputField } from './InputField';
import { Typography } from './Typography';

interface Props {
  term: string;
  clearSearch: () => void;
  onSearch: (event: React.ChangeEvent<HTMLFormElement>) => void;
}

function AppBar(props: Props) {
  const { term, onSearch, clearSearch } = props;

  const navigate = useNavigate();
  const location = useLocation();
  const searchRef = React.useRef<HTMLInputElement>(null);
  const [isSearch, setIsSearch] = React.useState(false);

  React.useEffect(() => {
    if (!searchRef.current) return;

    const allowedPathToSearch = ['/', '/archived'];

    if (isSearch) {
      searchRef.current.focus();
      if (allowedPathToSearch.includes(location.pathname)) return;
      navigate('/');
    }
  }, [isSearch]);

  const handleToggleSearch = () => {
    if (isSearch) clearSearch();
    setIsSearch((prev) => !prev);
  };

  return (
    <header className="sticky top-0 z-50 py-4 bg-white border-b">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Avatar />
          {!isSearch && (
            <Typography component="h1" variant="sub-heading" fontWeight="bold">
              Personal Notes
            </Typography>
          )}
        </div>

        <form className="flex-1" onChange={onSearch}>
          <InputField
            name="term"
            value={term}
            ref={searchRef}
            className={clsx({ hidden: !isSearch })}
          />
        </form>

        <div className="flex items-center gap-2">
          <IconButton onClick={handleToggleSearch}>
            {isSearch ? <XIcon /> : <SearchIcon />}
          </IconButton>

          <IconButton>
            <DotsHorizontalIcon />
          </IconButton>
        </div>
      </div>

      <TabBars>
        <TabBar to="/new">
          <PlusIcon className="w-5 h-5" />
        </TabBar>
        <Divider direction="vertical" />
        <TabBar to="/" fullWidth>
          Notes
        </TabBar>
        <Divider direction="vertical" />
        <TabBar to="/archived" fullWidth>
          Archived
        </TabBar>
      </TabBars>
    </header>
  );
}

export { AppBar };
