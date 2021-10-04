import SidebarRow from './SidebarRow'
import {
  ChevronDownIcon,
  ShoppingCartIcon,
  UserGroupIcon,
} from '@heroicons/react/outline'
import {
  CalendarIcon,
  ClockIcon,
  DesktopComputerIcon,
  ShoppingBagIcon,
  UsersIcon,
} from '@heroicons/react/solid'

export default function Sidebar(params) {
  return (
    <div className="p-2 mt-5 max-w-[600] xl:min-w-[300px]">
      <SidebarRow Icon={UsersIcon} title="Frank Pigeon" />
      <SidebarRow Icon={UsersIcon} title="Friends" />
      <SidebarRow Icon={UserGroupIcon} title="Groups" />
      <SidebarRow Icon={ShoppingBagIcon} title="Marketplace" />
      <SidebarRow Icon={DesktopComputerIcon} title="Watch" />
      <SidebarRow Icon={ClockIcon} title="Memories" />
      <SidebarRow Icon={ChevronDownIcon} title="See More" />
    </div>
  )
}
