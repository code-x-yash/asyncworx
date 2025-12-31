import requests
import sys
from datetime import datetime
import json

class AsyncWorxAPITester:
    def __init__(self, base_url="https://tech-innovation-24.preview.emergentagent.com"):
        self.base_url = base_url
        self.tests_run = 0
        self.tests_passed = 0
        self.test_results = []

    def run_test(self, name, method, endpoint, expected_status, data=None, headers=None):
        """Run a single API test"""
        url = f"{self.base_url}/{endpoint}"
        if headers is None:
            headers = {'Content-Type': 'application/json'}

        self.tests_run += 1
        print(f"\n🔍 Testing {name}...")
        print(f"URL: {url}")
        
        try:
            if method == 'GET':
                response = requests.get(url, headers=headers, timeout=10)
            elif method == 'POST':
                response = requests.post(url, json=data, headers=headers, timeout=10)

            success = response.status_code == expected_status
            if success:
                self.tests_passed += 1
                print(f"✅ Passed - Status: {response.status_code}")
                try:
                    response_data = response.json()
                    print(f"Response: {json.dumps(response_data, indent=2)}")
                except:
                    print(f"Response: {response.text}")
            else:
                print(f"❌ Failed - Expected {expected_status}, got {response.status_code}")
                print(f"Response: {response.text}")

            self.test_results.append({
                'name': name,
                'success': success,
                'status_code': response.status_code,
                'expected_status': expected_status,
                'response': response.text[:200] if response.text else ''
            })

            return success, response.json() if success and response.text else {}

        except Exception as e:
            print(f"❌ Failed - Error: {str(e)}")
            self.test_results.append({
                'name': name,
                'success': False,
                'error': str(e)
            })
            return False, {}

    def test_api_root(self):
        """Test API root endpoint"""
        return self.run_test(
            "API Root",
            "GET",
            "api/",
            200
        )

    def test_contact_form_valid(self):
        """Test valid contact form submission"""
        test_data = {
            "name": "John Doe",
            "company": "Test Company",
            "email": "john.doe@example.com",
            "phone": "+1-555-123-4567",
            "service_interest": "AI & Technology",
            "message": "This is a test message with more than 10 characters to meet validation requirements."
        }
        
        return self.run_test(
            "Contact Form - Valid Submission",
            "POST",
            "api/contact",
            200,
            data=test_data
        )

    def test_contact_form_invalid_name(self):
        """Test contact form with invalid name (too short)"""
        test_data = {
            "name": "J",  # Too short
            "email": "john.doe@example.com",
            "message": "This is a test message with more than 10 characters."
        }
        
        return self.run_test(
            "Contact Form - Invalid Name",
            "POST",
            "api/contact",
            400,
            data=test_data
        )

    def test_contact_form_invalid_email(self):
        """Test contact form with invalid email"""
        test_data = {
            "name": "John Doe",
            "email": "invalid-email",  # Invalid email format
            "message": "This is a test message with more than 10 characters."
        }
        
        return self.run_test(
            "Contact Form - Invalid Email",
            "POST",
            "api/contact",
            422,  # Pydantic validation error
            data=test_data
        )

    def test_contact_form_invalid_message(self):
        """Test contact form with invalid message (too short)"""
        test_data = {
            "name": "John Doe",
            "email": "john.doe@example.com",
            "message": "Short"  # Too short
        }
        
        return self.run_test(
            "Contact Form - Invalid Message",
            "POST",
            "api/contact",
            400,
            data=test_data
        )

    def test_get_contact_leads(self):
        """Test getting contact leads"""
        return self.run_test(
            "Get Contact Leads",
            "GET",
            "api/contact",
            200
        )

    def test_contact_form_minimal_valid(self):
        """Test contact form with minimal valid data"""
        test_data = {
            "name": "Jane Smith",
            "email": "jane.smith@example.com",
            "message": "This is a minimal test message that meets the 10 character requirement."
        }
        
        return self.run_test(
            "Contact Form - Minimal Valid Data",
            "POST",
            "api/contact",
            200,
            data=test_data
        )

def main():
    print("🚀 Starting AsyncWorx API Testing...")
    print("=" * 60)
    
    # Setup
    tester = AsyncWorxAPITester()

    # Run tests
    print("\n📋 Running API Tests...")
    
    # Test API root
    tester.test_api_root()
    
    # Test contact form validations
    tester.test_contact_form_valid()
    tester.test_contact_form_minimal_valid()
    tester.test_contact_form_invalid_name()
    tester.test_contact_form_invalid_email()
    tester.test_contact_form_invalid_message()
    
    # Test getting contact leads
    tester.test_get_contact_leads()

    # Print results
    print("\n" + "=" * 60)
    print(f"📊 Test Results: {tester.tests_passed}/{tester.tests_run} tests passed")
    
    if tester.tests_passed == tester.tests_run:
        print("🎉 All tests passed!")
        return 0
    else:
        print("❌ Some tests failed!")
        print("\nFailed tests:")
        for result in tester.test_results:
            if not result.get('success', False):
                print(f"  - {result['name']}: {result.get('error', 'Status code mismatch')}")
        return 1

if __name__ == "__main__":
    sys.exit(main())