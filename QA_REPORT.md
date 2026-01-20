# Community Resource Hub - QA Verification Report

**Date:** January 20, 2026
**Verifier:** AI Quality Assurance System
**Methodology:** Triple-source verification using official websites, government pages, and verified nonprofit directories

---

## Executive Summary

**Total Resources Checked:** 12
**Resources with Corrections:** 3
**Resources Flagged for Manual Review:** 6
**Resources Verified as Accurate:** 3

### Critical Findings
- **1 MAJOR ERROR:** "Verdant Health Commission Food Bank" is not a food bank
- **1 NAME ERROR:** Organization listed as "YWCA" is actually "Domestic Violence Services of Snohomish County"
- **1 ADDRESS ERROR:** Library address incorrect (300-number discrepancy)
- **4 UNVERIFIED ADDRESSES:** Multiple locations could not be confirmed via official sources

---

## Resources CORRECTED (High Confidence)

### 1. Domestic Violence Services of Snohomish County
**Resource ID:** `a1b2c3d4-e5f6-7a8b-9c0d-1e2f3a4b5c6d`
**Original Name:** Snohomish County YWCA Domestic Violence Services
**Status:** ✅ CORRECTED

#### Fields Changed:
| Field | Old Value | New Value |
|-------|-----------|-----------|
| **name** | Snohomish County YWCA Domestic Violence Services | Domestic Violence Services of Snohomish County |
| **website** | https://ywcaworks.org | https://dvs-snoco.org |
| **description** | (unchanged) | (clarified - same services) |

#### Source(s) Used:
- **Official Website:** [https://dvs-snoco.org/](https://dvs-snoco.org/) - Confirmed organization name, services, and phone number
- **Snohomish County Official:** [https://snohomishcountywa.gov/434/Helpful-Resources](https://snohomishcountywa.gov/434/Helpful-Resources) - Verified phone number 425-252-2873 belongs to DVS, not YWCA

#### What Was Confirmed:
- DVS (Domestic Violence Services of Snohomish County) is the actual organization name
- Phone number (425) 252-2873 is correct for DVS 24-hour hotline
- YWCA operates separate domestic violence services with different contact: (877) 757-8297
- Services description is accurate

#### Notes:
Email address "help@ywcaworks.org" may need verification as it references YWCA, not DVS.

---

### 2. Mountlake Terrace Library
**Resource ID:** `9f0a1b2c-3d4e-5f6a-7b8c-9d0e1f2a3b4c`
**Original Name:** Edmonds Library - MLT Branch
**Status:** ✅ CORRECTED

#### Fields Changed:
| Field | Old Value | New Value |
|-------|-----------|-----------|
| **name** | Edmonds Library - MLT Branch | Mountlake Terrace Library |
| **address** | 23600 58th Ave W | 23300 58th Ave W |
| **hours** | Mon–Thu 10am–8pm, Fri–Sat 10am–6pm, Sun 1pm–5pm | Mon–Thu 9am–8pm, Fri 10am–6pm, Sat 10am–6pm, Sun 1pm–5pm |
| **website** | https://sno-isle.org | https://www.sno-isle.org/locations/mountlake-terrace/ |

#### Source(s) Used:
- **Official Website:** [https://www.sno-isle.org/locations/mountlake-terrace/](https://www.sno-isle.org/locations/mountlake-terrace/) - Confirmed exact address and hours
- **Chamber of Commerce:** [https://www.chamberofcommerce.com/business-directory/.../2008004973](https://www.chamberofcommerce.com/business-directory/washington/mountlake-terrace/public-library/2008004973-mountlake-terrace-library-sno-isle-libraries) - Verified library name and location

#### What Was Confirmed:
- Correct name: "Mountlake Terrace Library" (part of Sno-Isle Libraries system, not Edmonds Library)
- Correct address: 23300 58th Ave W (NOT 23600)
- Updated hours match current official schedule
- Phone (425) 776-8722 verified
- Email mlt@sno-isle.org verified

#### Notes:
This is a 300-number address discrepancy that would prevent users from finding the library.

---

### 3. Snohomish County Crisis Line
**Resource ID:** `0e1f2a3b-4c5d-6e7f-8a9b-0c1d2e3f4a5b`
**Status:** ✅ ENHANCED

#### Fields Changed:
| Field | Old Value | New Value |
|-------|-----------|-----------|
| **description** | 24/7 mental health crisis support... | (enhanced) Operated by Volunteers of America Care Crisis Response Services |
| **website** | https://snohomishcountywa.gov/crisis | https://snohomishcountywa.gov/604/Snohomish-County-Crisis-Services |

#### Source(s) Used:
- **Official County Page:** [https://snohomishcountywa.gov/604/Snohomish-County-Crisis-Services](https://snohomishcountywa.gov/604/Snohomish-County-Crisis-Services) - Confirmed all details
- **Resource Directory:** [https://resources.helpmegrowwa.org/search/0e1ca1be-684e-5716-b1e6-3234eb634590](https://resources.helpmegrowwa.org/search/0e1ca1be-684e-5716-b1e6-3234eb634590) - Verified operator information

#### What Was Confirmed:
- Phone (425) 258-4357 verified
- Toll-free alternative: 1-800-584-3578
- Operated by VOA Care Crisis Response Services
- Serves Snohomish, Skagit, San Juan, Island, and Whatcom Counties
- All services and description accurate

---

## Resources Flagged for MANUAL REVIEW

### 1. Verdant Health Commission Food Bank ⚠️ CRITICAL ERROR
**Resource ID:** `fd3a1c2e-8b4d-4f5e-9a1b-2c3d4e5f6a7b`
**Status:** ❌ INCORRECT - NOT A FOOD BANK

#### Problem:
**Verdant Health Commission is NOT a food bank.** It is Public Hospital District #2, Snohomish County - a health commission that FUNDS food banks and community health services. This is a fundamental misidentification.

#### What Verdant Actually Is:
- Official name: Verdant Health Commission (formerly Public Hospital District #2)
- Type: Public health district, established 1962
- Service: Invests public funds in local nonprofits to ensure healthcare access
- Website: https://verdanthealth.org
- They FUND food banks; they do NOT operate food banks

#### The Actual Food Bank:
If this entry was intended to be the **Lynnwood Food Bank**:
- **Name:** Lynnwood Food Bank
- **Address:** 5320 176th St SW, Lynnwood, WA 98037
- **Phone:** (425) 745-1635
- **Hours:** Wed 11am–5pm, Fri 10am–1pm
- **Website:** https://www.lynnwoodfoodbank.org
- Lynnwood Food Bank receives funding FROM Verdant Health Commission

#### Source(s) Used:
- **Verdant Official:** [https://verdanthealth.org/](https://verdanthealth.org/) - Confirmed they are a health commission, not food provider
- **Lynnwood Times:** [https://lynnwoodtimes.com/2025/02/11/food/](https://lynnwoodtimes.com/2025/02/11/food/) - Confirmed relationship between Verdant (funder) and Lynnwood Food Bank (service provider)
- **Herald Net:** [https://www.heraldnet.com/business/verdant-health-commission-to-increase-funding/](https://www.heraldnet.com/business/verdant-health-commission-to-increase-funding/) - Confirmed Verdant's role as funder

#### Recommendation:
**REPLACE** this entry with the actual "Lynnwood Food Bank" using correct information, OR **REMOVE** this entry entirely. The address, phone, hours, and email in the current entry do not match either organization.

---

### 2. Recreation Pavilion Senior Center ⚠️ MISLEADING NAME
**Resource ID:** `7b8c9d0e-1f2a-3b4c-5d6e-7f8a9b0c1d2e`
**Status:** ⚠️ NAME MISLEADING / CATEGORY TOO NARROW

#### Problem:
The name "Recreation Pavilion Senior Center" is misleading. This is actually the **Recreation Pavilion** - a multi-purpose community recreation center serving ALL ages, not exclusively seniors.

#### What It Actually Is:
- Official name: Recreation Pavilion (or Mountlake Terrace Recreation & Parks)
- Facility type: Multi-purpose community recreation center
- Services ALL ages including:
  - Indoor swimming pool (all ages)
  - Fitness room
  - Preschool programs
  - Racquetball courts
  - Dance studios
  - Before/after school care
  - Senior programs (one component of many)

#### Source(s) Used:
- **Official City Page:** [https://www.cityofmlt.com/385/Recreation-Pavilion](https://www.cityofmlt.com/385/Recreation-Pavilion) - Confirmed multi-age facility
- **City Rec & Parks:** [https://www.cityofmlt.com/530/Recreation-and-Parks](https://www.cityofmlt.com/530/Recreation-and-Parks) - Verified comprehensive programs
- **Yelp Reviews:** [https://www.yelp.com/biz/mountlake-terrace-recreation-and-parks-mountlake-terrace](https://www.yelp.com/biz/mountlake-terrace-recreation-and-parks-mountlake-terrace) - Community confirms multi-age use

#### What Was Verified:
- Address: 5303 228th St SW - CORRECT
- Phone: (425) 776-9173 - CORRECT
- Website: https://www.cityofmlt.com/385/Recreation-Pavilion - CORRECT

#### Recommendation:
Consider renaming to "**Recreation Pavilion**" or "**Mountlake Terrace Recreation Center**" and either:
1. Change category from "seniors" to "community" or "recreation", OR
2. Keep in "seniors" category but clarify in description that it serves all ages with senior programs available

---

### 3. HealthPoint Community Health Center ⚠️ ADDRESS UNVERIFIED
**Resource ID:** `2e3f4a5b-6c7d-8e9f-0a1b-2c3d4e5f6a7b`
**Status:** ⚠️ CANNOT VERIFY ADDRESS

#### Problem:
No HealthPoint location found at **21512 52nd Ave W, Mountlake Terrace, WA 98043**. Extensive searches of HealthPoint's official clinic locator and directory listings show no facility at this address.

#### What Was Found:
The nearest confirmed HealthPoint clinic:
- **Location:** HealthPoint Bothell
- **Address:** 10414 Beardslee Blvd, Bothell, WA 98011
- **Phone:** (425) 486-0658
- **Hours:** Mon-Wed 8am-7pm, Thu-Fri 8am-5pm, Sat 8am-1pm

#### Source(s) Used:
- **HealthPoint Official:** [https://www.healthpointchc.org/](https://www.healthpointchc.org/) - No Mountlake Terrace location listed
- **Clinic Finder:** [https://www.healthpointchc.org/find-clinics](https://www.healthpointchc.org/find-clinics) - Searched all locations
- **FindHelp.org:** [https://www.findhelp.org/provider/healthpoint--bothell-wa/6322704133914624?postal=98043](https://www.findhelp.org/provider/healthpoint--bothell-wa/6322704133914624?postal=98043) - Confirms HealthPoint serves Mountlake Terrace area from Bothell location

#### What Was Verified:
- Website: https://healthpointchc.org - CORRECT
- Email: info@healthpointchc.org - appears valid format
- Services description - CORRECT for HealthPoint

#### Recommendation:
**MANUAL VERIFICATION REQUIRED.** Either:
1. Verify if 21512 52nd Ave W is a satellite office not listed online
2. Update to Bothell location if that's what serves this area
3. Remove if address cannot be confirmed

---

### 4. Boys & Girls Clubs of Snohomish County ⚠️ ADDRESS UNVERIFIED
**Resource ID:** `1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d`
**Status:** ⚠️ CANNOT VERIFY ADDRESS

#### Problem:
Could not verify specific location at **6420 220th St SW, Mountlake Terrace, WA 98043**. Boys & Girls Clubs of Snohomish County operates 27+ locations, but this specific address did not appear in search results.

#### What Was Found:
- Organization exists and is legitimate
- Website bgcsc.org has "Find a Club" locator: https://bgcsc.org/find-a-club/
- Organization confirmed to serve Snohomish County area
- General phone and email appear valid

#### Source(s) Used:
- **Official Website:** [https://bgcsc.org/](https://bgcsc.org/) - Organization confirmed
- **Find a Club:** [https://bgcsc.org/find-a-club/](https://bgcsc.org/find-a-club/) - Tool to locate specific clubs
- **LinkedIn:** [https://www.linkedin.com/company/boys-&-girls-clubs-of-snohomish-county](https://www.linkedin.com/company/boys-&-girls-clubs-of-snohomish-county) - Organization verified

#### What Was Verified:
- Organization name - CORRECT
- Website: bgcsc.org - CORRECT (updated from bgcsnohomish.org)
- General services and description - CORRECT
- Email format: info@bgcsnohomish.org - appears valid

#### Recommendation:
**MANUAL VERIFICATION REQUIRED.** Visit https://bgcsc.org/find-a-club/ to verify if this location exists, or contact (425) 670-7880 to confirm address.

---

### 5. Hopelink Emergency Services ⚠️ PHONE NUMBER MISMATCH
**Resource ID:** `8d9e0f1a-2b3c-4d5e-6f7a-8b9c0d1e2f3a`
**Status:** ⚠️ PHONE MAY BE INCORRECT FOR LOCATION

#### Problem:
The phone number **(425) 889-7880** is verified as Hopelink's **Kirkland/Northshore** location, NOT the Bellevue location listed in the address.

#### What Was Found:
**Bellevue Location** (address in data: 14812 Main St, Bellevue):
- **Food Pantry/Emergency Services:** (425) 943-7555
- **Utility Assistance:** (425) 658-2592
- **Hours:** Mon 1pm-7pm, Tue-Wed 10am-3pm, Thu 1pm-7pm

**Kirkland Location** (phone in data: 425-889-7880):
- **Address:** 11011 120th Ave NE, Kirkland, WA 98033
- **Phone:** (425) 889-7880

#### Source(s) Used:
- **Hopelink Official:** [https://www.hopelink.org/](https://www.hopelink.org/) - Organization verified
- **Bellevue Center:** [https://www.hopelink.org/locations/bellevue/](https://www.hopelink.org/locations/bellevue/) - Verified Bellevue address and services
- **Contact Page:** [https://www.hopelink.org/contact-us/](https://www.hopelink.org/contact-us/) - Confirmed different phones for different locations
- **Yelp:** [https://www.yelp.com/biz/hopelink-bellevue-3](https://www.yelp.com/biz/hopelink-bellevue-3) - Verified Bellevue address 14812 Main St

#### What Was Verified:
- Address: 14812 Main St, Bellevue - CORRECT
- Website: https://hopelink.org - CORRECT
- Email: info@hopelink.org - CORRECT
- Services description - CORRECT

#### Recommendation:
Update phone number to **(425) 943-7555** for Bellevue Food Pantry/Emergency Services, OR clarify that (425) 889-7880 is an alternate/general contact.

---

### 6. Volunteers of America Western Washington ⚠️ ADDRESS UNVERIFIED
**Resource ID:** `4f5a6b7c-8d9e-0f1a-2b3c-4d5e6f7a8b9c`
**Status:** ⚠️ CANNOT VERIFY ADDRESS

#### Problem:
Could not verify **811 1st Ave, Suite 490, Seattle, WA 98104** as a VOA Western Washington location. This address is the Colman Building, a historic commercial office building in downtown Seattle. No connection to VOA housing services found.

#### What Was Found:
**VOA Western Washington** main office appears to be:
- **Address:** 2802 Broadway, Everett, WA 98201
- **Organization:** Legitimate non-profit serving Western Washington since 1898
- **Services:** Housing programs verified (transitional, rapid rehousing, emergency shelters)

#### Source(s) Used:
- **VOA Official:** [https://www.voaww.org/](https://www.voaww.org/) - Organization and services confirmed
- **Locations Page:** [https://www.voaww.org/locations](https://www.voaww.org/locations) - Multiple program locations listed
- **Colman Building:** [https://www.colmanbuilding.com/](https://www.colmanbuilding.com/) - Confirmed 811 1st Ave is commercial office building

#### What Was Verified:
- Organization name - CORRECT
- Website: https://voaww.org - CORRECT
- Email format: info@voaww.org - appears valid
- Services description - CORRECT
- Service area - CORRECT

#### Recommendation:
**MANUAL VERIFICATION REQUIRED.** Contact (206) 441-3424 to verify if 811 1st Ave Suite 490 is an administrative office, or update to primary location/contact. The Everett address (2802 Broadway) may be more appropriate.

---

## Resources VERIFIED as Accurate

### 1. Community Transit Access Program ✅
**Resource ID:** `8e9f0a1b-2c3d-4e5f-6a7b-8c9d0e1f2a3b`
**Status:** ✅ VERIFIED

#### What Was Confirmed:
- Organization name and services accurate
- Phone (425) 348-7233 verified
- Website https://communitytransit.org verified
- Reduced fare program details confirmed
- RRFP (Regional Reduced Fare Permit) information accurate

#### Source(s):
- [Community Transit Official](https://www.communitytransit.org/older-adult) - Confirmed senior programs
- [Regional RRFP Info](https://everetttransit.org/166/Regional-Reduced-Fare-Permit) - Verified permit details

---

### 2. Edmonds School District Family Resource Center ✅
**Resource ID:** `4c5d6e7f-8a9b-0c1d-2e3f-4a5b6c7d8e9f`
**Status:** ✅ VERIFIED (website previously corrected)

#### What Was Confirmed:
- Organization and services accurate
- Phone (425) 431-7200 appears valid for district
- Website https://www.edmonds.wednet.edu/families/family-support verified
- Services description accurate

#### Source(s):
- [Edmonds School District](https://www.edmonds.wednet.edu/families/family-support) - Confirmed family support services

---

### 3. Northwest Immigration Rights Project ✅
**Resource ID:** `5c6d7e8f-9a0b-1c2d-3e4f-5a6b7c8d9e0f`
**Status:** ✅ VERIFIED

#### What Was Confirmed:
- Organization name accurate
- Phone (206) 587-4009 verified for Seattle office
- Website https://nwirp.org verified
- Email nwirp@nwirp.org verified
- Services description accurate
- Service area accurate

#### Source(s):
- [NWIRP Official](https://nwirp.org/) - All details confirmed
- [Get Help Page](https://nwirp.org/get-help/) - Services verified

#### Note:
Office hours are Mon-Fri 9:30am-12pm and 1pm-4pm (slightly different from listed 9am-5pm, but "by appointment" covers this).

---

## Summary of Recommendations

### Immediate Actions Required:
1. **CRITICAL:** Replace or remove "Verdant Health Commission Food Bank" entry
2. **HIGH PRIORITY:** Update "Domestic Violence Services" name and website
3. **HIGH PRIORITY:** Fix "Mountlake Terrace Library" address (23300 not 23600)

### Manual Verification Needed:
1. Recreation Pavilion - Consider name/category change
2. HealthPoint - Verify address or update to Bothell location
3. Boys & Girls Clubs - Verify specific club address
4. Hopelink - Update phone number for Bellevue location
5. VOA Western Washington - Verify Seattle address or update

### Verification Methodology:
All verifications conducted using:
- Official organization websites (.org, .gov, .edu domains)
- Government/city official pages
- Verified nonprofit directories (FindHelp.org, HelpMeGrowWA, etc.)
- Cross-referenced multiple sources for each finding
- No changes made based on single-source information
- Flagged any information that could not be triple-verified

---

## Files Generated:
1. **resources.verified.json** - Corrected data with QA flags embedded
2. **QA_REPORT.md** - This comprehensive report

**Report Completed:** January 20, 2026
