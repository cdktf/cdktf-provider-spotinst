# `spotinst_elastigroup_azure`

Refer to the Terraform Registory for docs: [`spotinst_elastigroup_azure`](https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure).

# `elastigroupAzure` Submodule <a name="`elastigroupAzure` Submodule" id="@cdktf/provider-spotinst.elastigroupAzure"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ElastigroupAzure <a name="ElastigroupAzure" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure"></a>

Represents a {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure spotinst_elastigroup_azure}.

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_azure

elastigroupAzure.ElastigroupAzure(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  low_priority_sizes: typing.List[str],
  name: str,
  network: ElastigroupAzureNetwork,
  od_sizes: typing.List[str],
  product: str,
  region: str,
  resource_group_name: str,
  strategy: ElastigroupAzureStrategy,
  custom_data: str = None,
  desired_capacity: typing.Union[int, float] = None,
  health_check: ElastigroupAzureHealthCheck = None,
  id: str = None,
  image: typing.Union[IResolvable, typing.List[ElastigroupAzureImage]] = None,
  integration_kubernetes: ElastigroupAzureIntegrationKubernetes = None,
  integration_multai_runtime: ElastigroupAzureIntegrationMultaiRuntime = None,
  load_balancers: typing.Union[IResolvable, typing.List[ElastigroupAzureLoadBalancers]] = None,
  login: ElastigroupAzureLogin = None,
  managed_service_identities: typing.Union[IResolvable, typing.List[ElastigroupAzureManagedServiceIdentities]] = None,
  max_size: typing.Union[int, float] = None,
  min_size: typing.Union[int, float] = None,
  scaling_down_policy: typing.Union[IResolvable, typing.List[ElastigroupAzureScalingDownPolicy]] = None,
  scaling_up_policy: typing.Union[IResolvable, typing.List[ElastigroupAzureScalingUpPolicy]] = None,
  scheduled_task: typing.Union[IResolvable, typing.List[ElastigroupAzureScheduledTask]] = None,
  shutdown_script: str = None,
  update_policy: ElastigroupAzureUpdatePolicy = None,
  user_data: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer.parameter.lowPrioritySizes">low_priority_sizes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#low_priority_sizes ElastigroupAzure#low_priority_sizes}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#name ElastigroupAzure#name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer.parameter.network">network</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetwork">ElastigroupAzureNetwork</a></code> | network block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer.parameter.odSizes">od_sizes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#od_sizes ElastigroupAzure#od_sizes}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer.parameter.product">product</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#product ElastigroupAzure#product}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer.parameter.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#region ElastigroupAzure#region}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#resource_group_name ElastigroupAzure#resource_group_name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer.parameter.strategy">strategy</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategy">ElastigroupAzureStrategy</a></code> | strategy block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer.parameter.customData">custom_data</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#custom_data ElastigroupAzure#custom_data}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer.parameter.desiredCapacity">desired_capacity</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#desired_capacity ElastigroupAzure#desired_capacity}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer.parameter.healthCheck">health_check</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheck">ElastigroupAzureHealthCheck</a></code> | health_check block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#id ElastigroupAzure#id}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer.parameter.image">image</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImage">ElastigroupAzureImage</a>]]</code> | image block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer.parameter.integrationKubernetes">integration_kubernetes</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetes">ElastigroupAzureIntegrationKubernetes</a></code> | integration_kubernetes block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer.parameter.integrationMultaiRuntime">integration_multai_runtime</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntime">ElastigroupAzureIntegrationMultaiRuntime</a></code> | integration_multai_runtime block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer.parameter.loadBalancers">load_balancers</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancers">ElastigroupAzureLoadBalancers</a>]]</code> | load_balancers block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer.parameter.login">login</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLogin">ElastigroupAzureLogin</a></code> | login block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer.parameter.managedServiceIdentities">managed_service_identities</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentities">ElastigroupAzureManagedServiceIdentities</a>]]</code> | managed_service_identities block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer.parameter.maxSize">max_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#max_size ElastigroupAzure#max_size}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer.parameter.minSize">min_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#min_size ElastigroupAzure#min_size}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer.parameter.scalingDownPolicy">scaling_down_policy</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicy">ElastigroupAzureScalingDownPolicy</a>]]</code> | scaling_down_policy block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer.parameter.scalingUpPolicy">scaling_up_policy</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicy">ElastigroupAzureScalingUpPolicy</a>]]</code> | scaling_up_policy block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer.parameter.scheduledTask">scheduled_task</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTask">ElastigroupAzureScheduledTask</a>]]</code> | scheduled_task block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer.parameter.shutdownScript">shutdown_script</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#shutdown_script ElastigroupAzure#shutdown_script}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer.parameter.updatePolicy">update_policy</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicy">ElastigroupAzureUpdatePolicy</a></code> | update_policy block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer.parameter.userData">user_data</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#user_data ElastigroupAzure#user_data}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `low_priority_sizes`<sup>Required</sup> <a name="low_priority_sizes" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer.parameter.lowPrioritySizes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#low_priority_sizes ElastigroupAzure#low_priority_sizes}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#name ElastigroupAzure#name}.

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer.parameter.network"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetwork">ElastigroupAzureNetwork</a>

network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#network ElastigroupAzure#network}

---

##### `od_sizes`<sup>Required</sup> <a name="od_sizes" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer.parameter.odSizes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#od_sizes ElastigroupAzure#od_sizes}.

---

##### `product`<sup>Required</sup> <a name="product" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer.parameter.product"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#product ElastigroupAzure#product}.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#region ElastigroupAzure#region}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#resource_group_name ElastigroupAzure#resource_group_name}.

---

##### `strategy`<sup>Required</sup> <a name="strategy" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer.parameter.strategy"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategy">ElastigroupAzureStrategy</a>

strategy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#strategy ElastigroupAzure#strategy}

---

##### `custom_data`<sup>Optional</sup> <a name="custom_data" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer.parameter.customData"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#custom_data ElastigroupAzure#custom_data}.

---

##### `desired_capacity`<sup>Optional</sup> <a name="desired_capacity" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer.parameter.desiredCapacity"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#desired_capacity ElastigroupAzure#desired_capacity}.

---

##### `health_check`<sup>Optional</sup> <a name="health_check" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer.parameter.healthCheck"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheck">ElastigroupAzureHealthCheck</a>

health_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#health_check ElastigroupAzure#health_check}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#id ElastigroupAzure#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `image`<sup>Optional</sup> <a name="image" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer.parameter.image"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImage">ElastigroupAzureImage</a>]]

image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#image ElastigroupAzure#image}

---

##### `integration_kubernetes`<sup>Optional</sup> <a name="integration_kubernetes" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer.parameter.integrationKubernetes"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetes">ElastigroupAzureIntegrationKubernetes</a>

integration_kubernetes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#integration_kubernetes ElastigroupAzure#integration_kubernetes}

---

##### `integration_multai_runtime`<sup>Optional</sup> <a name="integration_multai_runtime" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer.parameter.integrationMultaiRuntime"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntime">ElastigroupAzureIntegrationMultaiRuntime</a>

integration_multai_runtime block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#integration_multai_runtime ElastigroupAzure#integration_multai_runtime}

---

##### `load_balancers`<sup>Optional</sup> <a name="load_balancers" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer.parameter.loadBalancers"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancers">ElastigroupAzureLoadBalancers</a>]]

load_balancers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#load_balancers ElastigroupAzure#load_balancers}

---

##### `login`<sup>Optional</sup> <a name="login" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer.parameter.login"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLogin">ElastigroupAzureLogin</a>

login block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#login ElastigroupAzure#login}

---

##### `managed_service_identities`<sup>Optional</sup> <a name="managed_service_identities" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer.parameter.managedServiceIdentities"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentities">ElastigroupAzureManagedServiceIdentities</a>]]

managed_service_identities block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#managed_service_identities ElastigroupAzure#managed_service_identities}

---

##### `max_size`<sup>Optional</sup> <a name="max_size" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer.parameter.maxSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#max_size ElastigroupAzure#max_size}.

---

##### `min_size`<sup>Optional</sup> <a name="min_size" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer.parameter.minSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#min_size ElastigroupAzure#min_size}.

---

##### `scaling_down_policy`<sup>Optional</sup> <a name="scaling_down_policy" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer.parameter.scalingDownPolicy"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicy">ElastigroupAzureScalingDownPolicy</a>]]

scaling_down_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#scaling_down_policy ElastigroupAzure#scaling_down_policy}

---

##### `scaling_up_policy`<sup>Optional</sup> <a name="scaling_up_policy" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer.parameter.scalingUpPolicy"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicy">ElastigroupAzureScalingUpPolicy</a>]]

scaling_up_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#scaling_up_policy ElastigroupAzure#scaling_up_policy}

---

##### `scheduled_task`<sup>Optional</sup> <a name="scheduled_task" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer.parameter.scheduledTask"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTask">ElastigroupAzureScheduledTask</a>]]

scheduled_task block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#scheduled_task ElastigroupAzure#scheduled_task}

---

##### `shutdown_script`<sup>Optional</sup> <a name="shutdown_script" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer.parameter.shutdownScript"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#shutdown_script ElastigroupAzure#shutdown_script}.

---

##### `update_policy`<sup>Optional</sup> <a name="update_policy" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer.parameter.updatePolicy"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicy">ElastigroupAzureUpdatePolicy</a>

update_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#update_policy ElastigroupAzure#update_policy}

---

##### `user_data`<sup>Optional</sup> <a name="user_data" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer.parameter.userData"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#user_data ElastigroupAzure#user_data}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.putHealthCheck">put_health_check</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.putImage">put_image</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.putIntegrationKubernetes">put_integration_kubernetes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.putIntegrationMultaiRuntime">put_integration_multai_runtime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.putLoadBalancers">put_load_balancers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.putLogin">put_login</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.putManagedServiceIdentities">put_managed_service_identities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.putNetwork">put_network</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.putScalingDownPolicy">put_scaling_down_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.putScalingUpPolicy">put_scaling_up_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.putScheduledTask">put_scheduled_task</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.putStrategy">put_strategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.putUpdatePolicy">put_update_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.resetCustomData">reset_custom_data</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.resetDesiredCapacity">reset_desired_capacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.resetHealthCheck">reset_health_check</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.resetImage">reset_image</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.resetIntegrationKubernetes">reset_integration_kubernetes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.resetIntegrationMultaiRuntime">reset_integration_multai_runtime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.resetLoadBalancers">reset_load_balancers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.resetLogin">reset_login</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.resetManagedServiceIdentities">reset_managed_service_identities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.resetMaxSize">reset_max_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.resetMinSize">reset_min_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.resetScalingDownPolicy">reset_scaling_down_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.resetScalingUpPolicy">reset_scaling_up_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.resetScheduledTask">reset_scheduled_task</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.resetShutdownScript">reset_shutdown_script</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.resetUpdatePolicy">reset_update_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.resetUserData">reset_user_data</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_health_check` <a name="put_health_check" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.putHealthCheck"></a>

```python
def put_health_check(
  health_check_type: str,
  auto_healing: typing.Union[bool, IResolvable] = None,
  grace_period: typing.Union[int, float] = None
) -> None
```

###### `health_check_type`<sup>Required</sup> <a name="health_check_type" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.putHealthCheck.parameter.healthCheckType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#health_check_type ElastigroupAzure#health_check_type}.

---

###### `auto_healing`<sup>Optional</sup> <a name="auto_healing" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.putHealthCheck.parameter.autoHealing"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#auto_healing ElastigroupAzure#auto_healing}.

---

###### `grace_period`<sup>Optional</sup> <a name="grace_period" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.putHealthCheck.parameter.gracePeriod"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#grace_period ElastigroupAzure#grace_period}.

---

##### `put_image` <a name="put_image" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.putImage"></a>

```python
def put_image(
  value: typing.Union[IResolvable, typing.List[ElastigroupAzureImage]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.putImage.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImage">ElastigroupAzureImage</a>]]

---

##### `put_integration_kubernetes` <a name="put_integration_kubernetes" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.putIntegrationKubernetes"></a>

```python
def put_integration_kubernetes(
  cluster_identifier: str
) -> None
```

###### `cluster_identifier`<sup>Required</sup> <a name="cluster_identifier" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.putIntegrationKubernetes.parameter.clusterIdentifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#cluster_identifier ElastigroupAzure#cluster_identifier}.

---

##### `put_integration_multai_runtime` <a name="put_integration_multai_runtime" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.putIntegrationMultaiRuntime"></a>

```python
def put_integration_multai_runtime(
  deployment_id: str
) -> None
```

###### `deployment_id`<sup>Required</sup> <a name="deployment_id" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.putIntegrationMultaiRuntime.parameter.deploymentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#deployment_id ElastigroupAzure#deployment_id}.

---

##### `put_load_balancers` <a name="put_load_balancers" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.putLoadBalancers"></a>

```python
def put_load_balancers(
  value: typing.Union[IResolvable, typing.List[ElastigroupAzureLoadBalancers]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.putLoadBalancers.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancers">ElastigroupAzureLoadBalancers</a>]]

---

##### `put_login` <a name="put_login" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.putLogin"></a>

```python
def put_login(
  user_name: str,
  password: str = None,
  ssh_public_key: str = None
) -> None
```

###### `user_name`<sup>Required</sup> <a name="user_name" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.putLogin.parameter.userName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#user_name ElastigroupAzure#user_name}.

---

###### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.putLogin.parameter.password"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#password ElastigroupAzure#password}.

---

###### `ssh_public_key`<sup>Optional</sup> <a name="ssh_public_key" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.putLogin.parameter.sshPublicKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#ssh_public_key ElastigroupAzure#ssh_public_key}.

---

##### `put_managed_service_identities` <a name="put_managed_service_identities" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.putManagedServiceIdentities"></a>

```python
def put_managed_service_identities(
  value: typing.Union[IResolvable, typing.List[ElastigroupAzureManagedServiceIdentities]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.putManagedServiceIdentities.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentities">ElastigroupAzureManagedServiceIdentities</a>]]

---

##### `put_network` <a name="put_network" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.putNetwork"></a>

```python
def put_network(
  resource_group_name: str,
  subnet_name: str,
  virtual_network_name: str,
  additional_ip_configs: typing.Union[IResolvable, typing.List[ElastigroupAzureNetworkAdditionalIpConfigs]] = None,
  assign_public_ip: typing.Union[bool, IResolvable] = None
) -> None
```

###### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.putNetwork.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#resource_group_name ElastigroupAzure#resource_group_name}.

---

###### `subnet_name`<sup>Required</sup> <a name="subnet_name" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.putNetwork.parameter.subnetName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#subnet_name ElastigroupAzure#subnet_name}.

---

###### `virtual_network_name`<sup>Required</sup> <a name="virtual_network_name" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.putNetwork.parameter.virtualNetworkName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#virtual_network_name ElastigroupAzure#virtual_network_name}.

---

###### `additional_ip_configs`<sup>Optional</sup> <a name="additional_ip_configs" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.putNetwork.parameter.additionalIpConfigs"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigs">ElastigroupAzureNetworkAdditionalIpConfigs</a>]]

additional_ip_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#additional_ip_configs ElastigroupAzure#additional_ip_configs}

---

###### `assign_public_ip`<sup>Optional</sup> <a name="assign_public_ip" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.putNetwork.parameter.assignPublicIp"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#assign_public_ip ElastigroupAzure#assign_public_ip}.

---

##### `put_scaling_down_policy` <a name="put_scaling_down_policy" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.putScalingDownPolicy"></a>

```python
def put_scaling_down_policy(
  value: typing.Union[IResolvable, typing.List[ElastigroupAzureScalingDownPolicy]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.putScalingDownPolicy.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicy">ElastigroupAzureScalingDownPolicy</a>]]

---

##### `put_scaling_up_policy` <a name="put_scaling_up_policy" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.putScalingUpPolicy"></a>

```python
def put_scaling_up_policy(
  value: typing.Union[IResolvable, typing.List[ElastigroupAzureScalingUpPolicy]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.putScalingUpPolicy.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicy">ElastigroupAzureScalingUpPolicy</a>]]

---

##### `put_scheduled_task` <a name="put_scheduled_task" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.putScheduledTask"></a>

```python
def put_scheduled_task(
  value: typing.Union[IResolvable, typing.List[ElastigroupAzureScheduledTask]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.putScheduledTask.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTask">ElastigroupAzureScheduledTask</a>]]

---

##### `put_strategy` <a name="put_strategy" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.putStrategy"></a>

```python
def put_strategy(
  draining_timeout: typing.Union[int, float] = None,
  low_priority_percentage: typing.Union[int, float] = None,
  od_count: typing.Union[int, float] = None
) -> None
```

###### `draining_timeout`<sup>Optional</sup> <a name="draining_timeout" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.putStrategy.parameter.drainingTimeout"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#draining_timeout ElastigroupAzure#draining_timeout}.

---

###### `low_priority_percentage`<sup>Optional</sup> <a name="low_priority_percentage" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.putStrategy.parameter.lowPriorityPercentage"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#low_priority_percentage ElastigroupAzure#low_priority_percentage}.

---

###### `od_count`<sup>Optional</sup> <a name="od_count" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.putStrategy.parameter.odCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#od_count ElastigroupAzure#od_count}.

---

##### `put_update_policy` <a name="put_update_policy" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.putUpdatePolicy"></a>

```python
def put_update_policy(
  should_roll: typing.Union[bool, IResolvable],
  roll_config: ElastigroupAzureUpdatePolicyRollConfig = None
) -> None
```

###### `should_roll`<sup>Required</sup> <a name="should_roll" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.putUpdatePolicy.parameter.shouldRoll"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#should_roll ElastigroupAzure#should_roll}.

---

###### `roll_config`<sup>Optional</sup> <a name="roll_config" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.putUpdatePolicy.parameter.rollConfig"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfig">ElastigroupAzureUpdatePolicyRollConfig</a>

roll_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#roll_config ElastigroupAzure#roll_config}

---

##### `reset_custom_data` <a name="reset_custom_data" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.resetCustomData"></a>

```python
def reset_custom_data() -> None
```

##### `reset_desired_capacity` <a name="reset_desired_capacity" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.resetDesiredCapacity"></a>

```python
def reset_desired_capacity() -> None
```

##### `reset_health_check` <a name="reset_health_check" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.resetHealthCheck"></a>

```python
def reset_health_check() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_image` <a name="reset_image" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.resetImage"></a>

```python
def reset_image() -> None
```

##### `reset_integration_kubernetes` <a name="reset_integration_kubernetes" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.resetIntegrationKubernetes"></a>

```python
def reset_integration_kubernetes() -> None
```

##### `reset_integration_multai_runtime` <a name="reset_integration_multai_runtime" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.resetIntegrationMultaiRuntime"></a>

```python
def reset_integration_multai_runtime() -> None
```

##### `reset_load_balancers` <a name="reset_load_balancers" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.resetLoadBalancers"></a>

```python
def reset_load_balancers() -> None
```

##### `reset_login` <a name="reset_login" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.resetLogin"></a>

```python
def reset_login() -> None
```

##### `reset_managed_service_identities` <a name="reset_managed_service_identities" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.resetManagedServiceIdentities"></a>

```python
def reset_managed_service_identities() -> None
```

##### `reset_max_size` <a name="reset_max_size" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.resetMaxSize"></a>

```python
def reset_max_size() -> None
```

##### `reset_min_size` <a name="reset_min_size" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.resetMinSize"></a>

```python
def reset_min_size() -> None
```

##### `reset_scaling_down_policy` <a name="reset_scaling_down_policy" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.resetScalingDownPolicy"></a>

```python
def reset_scaling_down_policy() -> None
```

##### `reset_scaling_up_policy` <a name="reset_scaling_up_policy" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.resetScalingUpPolicy"></a>

```python
def reset_scaling_up_policy() -> None
```

##### `reset_scheduled_task` <a name="reset_scheduled_task" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.resetScheduledTask"></a>

```python
def reset_scheduled_task() -> None
```

##### `reset_shutdown_script` <a name="reset_shutdown_script" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.resetShutdownScript"></a>

```python
def reset_shutdown_script() -> None
```

##### `reset_update_policy` <a name="reset_update_policy" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.resetUpdatePolicy"></a>

```python
def reset_update_policy() -> None
```

##### `reset_user_data` <a name="reset_user_data" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.resetUserData"></a>

```python
def reset_user_data() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.isConstruct"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_azure

elastigroupAzure.ElastigroupAzure.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_azure

elastigroupAzure.ElastigroupAzure.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_azure

elastigroupAzure.ElastigroupAzure.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.healthCheck">health_check</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference">ElastigroupAzureHealthCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.image">image</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageList">ElastigroupAzureImageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.integrationKubernetes">integration_kubernetes</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference">ElastigroupAzureIntegrationKubernetesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.integrationMultaiRuntime">integration_multai_runtime</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference">ElastigroupAzureIntegrationMultaiRuntimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.loadBalancers">load_balancers</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersList">ElastigroupAzureLoadBalancersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.login">login</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference">ElastigroupAzureLoginOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.managedServiceIdentities">managed_service_identities</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesList">ElastigroupAzureManagedServiceIdentitiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.network">network</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference">ElastigroupAzureNetworkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.scalingDownPolicy">scaling_down_policy</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyList">ElastigroupAzureScalingDownPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.scalingUpPolicy">scaling_up_policy</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyList">ElastigroupAzureScalingUpPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.scheduledTask">scheduled_task</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskList">ElastigroupAzureScheduledTaskList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.strategy">strategy</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference">ElastigroupAzureStrategyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.updatePolicy">update_policy</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference">ElastigroupAzureUpdatePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.customDataInput">custom_data_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.desiredCapacityInput">desired_capacity_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.healthCheckInput">health_check_input</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheck">ElastigroupAzureHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.imageInput">image_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImage">ElastigroupAzureImage</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.integrationKubernetesInput">integration_kubernetes_input</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetes">ElastigroupAzureIntegrationKubernetes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.integrationMultaiRuntimeInput">integration_multai_runtime_input</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntime">ElastigroupAzureIntegrationMultaiRuntime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.loadBalancersInput">load_balancers_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancers">ElastigroupAzureLoadBalancers</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.loginInput">login_input</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLogin">ElastigroupAzureLogin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.lowPrioritySizesInput">low_priority_sizes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.managedServiceIdentitiesInput">managed_service_identities_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentities">ElastigroupAzureManagedServiceIdentities</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.maxSizeInput">max_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.minSizeInput">min_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.networkInput">network_input</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetwork">ElastigroupAzureNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.odSizesInput">od_sizes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.productInput">product_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.scalingDownPolicyInput">scaling_down_policy_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicy">ElastigroupAzureScalingDownPolicy</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.scalingUpPolicyInput">scaling_up_policy_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicy">ElastigroupAzureScalingUpPolicy</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.scheduledTaskInput">scheduled_task_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTask">ElastigroupAzureScheduledTask</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.shutdownScriptInput">shutdown_script_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.strategyInput">strategy_input</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategy">ElastigroupAzureStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.updatePolicyInput">update_policy_input</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicy">ElastigroupAzureUpdatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.userDataInput">user_data_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.customData">custom_data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.desiredCapacity">desired_capacity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.lowPrioritySizes">low_priority_sizes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.maxSize">max_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.minSize">min_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.odSizes">od_sizes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.product">product</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.shutdownScript">shutdown_script</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.userData">user_data</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `health_check`<sup>Required</sup> <a name="health_check" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.healthCheck"></a>

```python
health_check: ElastigroupAzureHealthCheckOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference">ElastigroupAzureHealthCheckOutputReference</a>

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.image"></a>

```python
image: ElastigroupAzureImageList
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageList">ElastigroupAzureImageList</a>

---

##### `integration_kubernetes`<sup>Required</sup> <a name="integration_kubernetes" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.integrationKubernetes"></a>

```python
integration_kubernetes: ElastigroupAzureIntegrationKubernetesOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference">ElastigroupAzureIntegrationKubernetesOutputReference</a>

---

##### `integration_multai_runtime`<sup>Required</sup> <a name="integration_multai_runtime" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.integrationMultaiRuntime"></a>

```python
integration_multai_runtime: ElastigroupAzureIntegrationMultaiRuntimeOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference">ElastigroupAzureIntegrationMultaiRuntimeOutputReference</a>

---

##### `load_balancers`<sup>Required</sup> <a name="load_balancers" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.loadBalancers"></a>

```python
load_balancers: ElastigroupAzureLoadBalancersList
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersList">ElastigroupAzureLoadBalancersList</a>

---

##### `login`<sup>Required</sup> <a name="login" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.login"></a>

```python
login: ElastigroupAzureLoginOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference">ElastigroupAzureLoginOutputReference</a>

---

##### `managed_service_identities`<sup>Required</sup> <a name="managed_service_identities" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.managedServiceIdentities"></a>

```python
managed_service_identities: ElastigroupAzureManagedServiceIdentitiesList
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesList">ElastigroupAzureManagedServiceIdentitiesList</a>

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.network"></a>

```python
network: ElastigroupAzureNetworkOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference">ElastigroupAzureNetworkOutputReference</a>

---

##### `scaling_down_policy`<sup>Required</sup> <a name="scaling_down_policy" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.scalingDownPolicy"></a>

```python
scaling_down_policy: ElastigroupAzureScalingDownPolicyList
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyList">ElastigroupAzureScalingDownPolicyList</a>

---

##### `scaling_up_policy`<sup>Required</sup> <a name="scaling_up_policy" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.scalingUpPolicy"></a>

```python
scaling_up_policy: ElastigroupAzureScalingUpPolicyList
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyList">ElastigroupAzureScalingUpPolicyList</a>

---

##### `scheduled_task`<sup>Required</sup> <a name="scheduled_task" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.scheduledTask"></a>

```python
scheduled_task: ElastigroupAzureScheduledTaskList
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskList">ElastigroupAzureScheduledTaskList</a>

---

##### `strategy`<sup>Required</sup> <a name="strategy" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.strategy"></a>

```python
strategy: ElastigroupAzureStrategyOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference">ElastigroupAzureStrategyOutputReference</a>

---

##### `update_policy`<sup>Required</sup> <a name="update_policy" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.updatePolicy"></a>

```python
update_policy: ElastigroupAzureUpdatePolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference">ElastigroupAzureUpdatePolicyOutputReference</a>

---

##### `custom_data_input`<sup>Optional</sup> <a name="custom_data_input" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.customDataInput"></a>

```python
custom_data_input: str
```

- *Type:* str

---

##### `desired_capacity_input`<sup>Optional</sup> <a name="desired_capacity_input" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.desiredCapacityInput"></a>

```python
desired_capacity_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `health_check_input`<sup>Optional</sup> <a name="health_check_input" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.healthCheckInput"></a>

```python
health_check_input: ElastigroupAzureHealthCheck
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheck">ElastigroupAzureHealthCheck</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `image_input`<sup>Optional</sup> <a name="image_input" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.imageInput"></a>

```python
image_input: typing.Union[IResolvable, typing.List[ElastigroupAzureImage]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImage">ElastigroupAzureImage</a>]]

---

##### `integration_kubernetes_input`<sup>Optional</sup> <a name="integration_kubernetes_input" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.integrationKubernetesInput"></a>

```python
integration_kubernetes_input: ElastigroupAzureIntegrationKubernetes
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetes">ElastigroupAzureIntegrationKubernetes</a>

---

##### `integration_multai_runtime_input`<sup>Optional</sup> <a name="integration_multai_runtime_input" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.integrationMultaiRuntimeInput"></a>

```python
integration_multai_runtime_input: ElastigroupAzureIntegrationMultaiRuntime
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntime">ElastigroupAzureIntegrationMultaiRuntime</a>

---

##### `load_balancers_input`<sup>Optional</sup> <a name="load_balancers_input" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.loadBalancersInput"></a>

```python
load_balancers_input: typing.Union[IResolvable, typing.List[ElastigroupAzureLoadBalancers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancers">ElastigroupAzureLoadBalancers</a>]]

---

##### `login_input`<sup>Optional</sup> <a name="login_input" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.loginInput"></a>

```python
login_input: ElastigroupAzureLogin
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLogin">ElastigroupAzureLogin</a>

---

##### `low_priority_sizes_input`<sup>Optional</sup> <a name="low_priority_sizes_input" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.lowPrioritySizesInput"></a>

```python
low_priority_sizes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `managed_service_identities_input`<sup>Optional</sup> <a name="managed_service_identities_input" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.managedServiceIdentitiesInput"></a>

```python
managed_service_identities_input: typing.Union[IResolvable, typing.List[ElastigroupAzureManagedServiceIdentities]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentities">ElastigroupAzureManagedServiceIdentities</a>]]

---

##### `max_size_input`<sup>Optional</sup> <a name="max_size_input" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.maxSizeInput"></a>

```python
max_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_size_input`<sup>Optional</sup> <a name="min_size_input" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.minSizeInput"></a>

```python
min_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_input`<sup>Optional</sup> <a name="network_input" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.networkInput"></a>

```python
network_input: ElastigroupAzureNetwork
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetwork">ElastigroupAzureNetwork</a>

---

##### `od_sizes_input`<sup>Optional</sup> <a name="od_sizes_input" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.odSizesInput"></a>

```python
od_sizes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `product_input`<sup>Optional</sup> <a name="product_input" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.productInput"></a>

```python
product_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `scaling_down_policy_input`<sup>Optional</sup> <a name="scaling_down_policy_input" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.scalingDownPolicyInput"></a>

```python
scaling_down_policy_input: typing.Union[IResolvable, typing.List[ElastigroupAzureScalingDownPolicy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicy">ElastigroupAzureScalingDownPolicy</a>]]

---

##### `scaling_up_policy_input`<sup>Optional</sup> <a name="scaling_up_policy_input" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.scalingUpPolicyInput"></a>

```python
scaling_up_policy_input: typing.Union[IResolvable, typing.List[ElastigroupAzureScalingUpPolicy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicy">ElastigroupAzureScalingUpPolicy</a>]]

---

##### `scheduled_task_input`<sup>Optional</sup> <a name="scheduled_task_input" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.scheduledTaskInput"></a>

```python
scheduled_task_input: typing.Union[IResolvable, typing.List[ElastigroupAzureScheduledTask]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTask">ElastigroupAzureScheduledTask</a>]]

---

##### `shutdown_script_input`<sup>Optional</sup> <a name="shutdown_script_input" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.shutdownScriptInput"></a>

```python
shutdown_script_input: str
```

- *Type:* str

---

##### `strategy_input`<sup>Optional</sup> <a name="strategy_input" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.strategyInput"></a>

```python
strategy_input: ElastigroupAzureStrategy
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategy">ElastigroupAzureStrategy</a>

---

##### `update_policy_input`<sup>Optional</sup> <a name="update_policy_input" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.updatePolicyInput"></a>

```python
update_policy_input: ElastigroupAzureUpdatePolicy
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicy">ElastigroupAzureUpdatePolicy</a>

---

##### `user_data_input`<sup>Optional</sup> <a name="user_data_input" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.userDataInput"></a>

```python
user_data_input: str
```

- *Type:* str

---

##### `custom_data`<sup>Required</sup> <a name="custom_data" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.customData"></a>

```python
custom_data: str
```

- *Type:* str

---

##### `desired_capacity`<sup>Required</sup> <a name="desired_capacity" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.desiredCapacity"></a>

```python
desired_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `low_priority_sizes`<sup>Required</sup> <a name="low_priority_sizes" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.lowPrioritySizes"></a>

```python
low_priority_sizes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `max_size`<sup>Required</sup> <a name="max_size" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.maxSize"></a>

```python
max_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_size`<sup>Required</sup> <a name="min_size" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.minSize"></a>

```python
min_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `od_sizes`<sup>Required</sup> <a name="od_sizes" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.odSizes"></a>

```python
od_sizes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `product`<sup>Required</sup> <a name="product" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.product"></a>

```python
product: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `shutdown_script`<sup>Required</sup> <a name="shutdown_script" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.shutdownScript"></a>

```python
shutdown_script: str
```

- *Type:* str

---

##### `user_data`<sup>Required</sup> <a name="user_data" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.userData"></a>

```python
user_data: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ElastigroupAzureConfig <a name="ElastigroupAzureConfig" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_azure

elastigroupAzure.ElastigroupAzureConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  low_priority_sizes: typing.List[str],
  name: str,
  network: ElastigroupAzureNetwork,
  od_sizes: typing.List[str],
  product: str,
  region: str,
  resource_group_name: str,
  strategy: ElastigroupAzureStrategy,
  custom_data: str = None,
  desired_capacity: typing.Union[int, float] = None,
  health_check: ElastigroupAzureHealthCheck = None,
  id: str = None,
  image: typing.Union[IResolvable, typing.List[ElastigroupAzureImage]] = None,
  integration_kubernetes: ElastigroupAzureIntegrationKubernetes = None,
  integration_multai_runtime: ElastigroupAzureIntegrationMultaiRuntime = None,
  load_balancers: typing.Union[IResolvable, typing.List[ElastigroupAzureLoadBalancers]] = None,
  login: ElastigroupAzureLogin = None,
  managed_service_identities: typing.Union[IResolvable, typing.List[ElastigroupAzureManagedServiceIdentities]] = None,
  max_size: typing.Union[int, float] = None,
  min_size: typing.Union[int, float] = None,
  scaling_down_policy: typing.Union[IResolvable, typing.List[ElastigroupAzureScalingDownPolicy]] = None,
  scaling_up_policy: typing.Union[IResolvable, typing.List[ElastigroupAzureScalingUpPolicy]] = None,
  scheduled_task: typing.Union[IResolvable, typing.List[ElastigroupAzureScheduledTask]] = None,
  shutdown_script: str = None,
  update_policy: ElastigroupAzureUpdatePolicy = None,
  user_data: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.lowPrioritySizes">low_priority_sizes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#low_priority_sizes ElastigroupAzure#low_priority_sizes}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#name ElastigroupAzure#name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.network">network</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetwork">ElastigroupAzureNetwork</a></code> | network block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.odSizes">od_sizes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#od_sizes ElastigroupAzure#od_sizes}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.product">product</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#product ElastigroupAzure#product}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#region ElastigroupAzure#region}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#resource_group_name ElastigroupAzure#resource_group_name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.strategy">strategy</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategy">ElastigroupAzureStrategy</a></code> | strategy block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.customData">custom_data</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#custom_data ElastigroupAzure#custom_data}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.desiredCapacity">desired_capacity</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#desired_capacity ElastigroupAzure#desired_capacity}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.healthCheck">health_check</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheck">ElastigroupAzureHealthCheck</a></code> | health_check block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#id ElastigroupAzure#id}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.image">image</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImage">ElastigroupAzureImage</a>]]</code> | image block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.integrationKubernetes">integration_kubernetes</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetes">ElastigroupAzureIntegrationKubernetes</a></code> | integration_kubernetes block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.integrationMultaiRuntime">integration_multai_runtime</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntime">ElastigroupAzureIntegrationMultaiRuntime</a></code> | integration_multai_runtime block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.loadBalancers">load_balancers</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancers">ElastigroupAzureLoadBalancers</a>]]</code> | load_balancers block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.login">login</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLogin">ElastigroupAzureLogin</a></code> | login block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.managedServiceIdentities">managed_service_identities</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentities">ElastigroupAzureManagedServiceIdentities</a>]]</code> | managed_service_identities block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.maxSize">max_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#max_size ElastigroupAzure#max_size}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.minSize">min_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#min_size ElastigroupAzure#min_size}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.scalingDownPolicy">scaling_down_policy</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicy">ElastigroupAzureScalingDownPolicy</a>]]</code> | scaling_down_policy block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.scalingUpPolicy">scaling_up_policy</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicy">ElastigroupAzureScalingUpPolicy</a>]]</code> | scaling_up_policy block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.scheduledTask">scheduled_task</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTask">ElastigroupAzureScheduledTask</a>]]</code> | scheduled_task block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.shutdownScript">shutdown_script</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#shutdown_script ElastigroupAzure#shutdown_script}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.updatePolicy">update_policy</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicy">ElastigroupAzureUpdatePolicy</a></code> | update_policy block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.userData">user_data</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#user_data ElastigroupAzure#user_data}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `low_priority_sizes`<sup>Required</sup> <a name="low_priority_sizes" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.lowPrioritySizes"></a>

```python
low_priority_sizes: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#low_priority_sizes ElastigroupAzure#low_priority_sizes}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#name ElastigroupAzure#name}.

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.network"></a>

```python
network: ElastigroupAzureNetwork
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetwork">ElastigroupAzureNetwork</a>

network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#network ElastigroupAzure#network}

---

##### `od_sizes`<sup>Required</sup> <a name="od_sizes" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.odSizes"></a>

```python
od_sizes: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#od_sizes ElastigroupAzure#od_sizes}.

---

##### `product`<sup>Required</sup> <a name="product" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.product"></a>

```python
product: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#product ElastigroupAzure#product}.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#region ElastigroupAzure#region}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#resource_group_name ElastigroupAzure#resource_group_name}.

---

##### `strategy`<sup>Required</sup> <a name="strategy" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.strategy"></a>

```python
strategy: ElastigroupAzureStrategy
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategy">ElastigroupAzureStrategy</a>

strategy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#strategy ElastigroupAzure#strategy}

---

##### `custom_data`<sup>Optional</sup> <a name="custom_data" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.customData"></a>

```python
custom_data: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#custom_data ElastigroupAzure#custom_data}.

---

##### `desired_capacity`<sup>Optional</sup> <a name="desired_capacity" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.desiredCapacity"></a>

```python
desired_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#desired_capacity ElastigroupAzure#desired_capacity}.

---

##### `health_check`<sup>Optional</sup> <a name="health_check" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.healthCheck"></a>

```python
health_check: ElastigroupAzureHealthCheck
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheck">ElastigroupAzureHealthCheck</a>

health_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#health_check ElastigroupAzure#health_check}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#id ElastigroupAzure#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `image`<sup>Optional</sup> <a name="image" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.image"></a>

```python
image: typing.Union[IResolvable, typing.List[ElastigroupAzureImage]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImage">ElastigroupAzureImage</a>]]

image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#image ElastigroupAzure#image}

---

##### `integration_kubernetes`<sup>Optional</sup> <a name="integration_kubernetes" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.integrationKubernetes"></a>

```python
integration_kubernetes: ElastigroupAzureIntegrationKubernetes
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetes">ElastigroupAzureIntegrationKubernetes</a>

integration_kubernetes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#integration_kubernetes ElastigroupAzure#integration_kubernetes}

---

##### `integration_multai_runtime`<sup>Optional</sup> <a name="integration_multai_runtime" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.integrationMultaiRuntime"></a>

```python
integration_multai_runtime: ElastigroupAzureIntegrationMultaiRuntime
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntime">ElastigroupAzureIntegrationMultaiRuntime</a>

integration_multai_runtime block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#integration_multai_runtime ElastigroupAzure#integration_multai_runtime}

---

##### `load_balancers`<sup>Optional</sup> <a name="load_balancers" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.loadBalancers"></a>

```python
load_balancers: typing.Union[IResolvable, typing.List[ElastigroupAzureLoadBalancers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancers">ElastigroupAzureLoadBalancers</a>]]

load_balancers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#load_balancers ElastigroupAzure#load_balancers}

---

##### `login`<sup>Optional</sup> <a name="login" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.login"></a>

```python
login: ElastigroupAzureLogin
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLogin">ElastigroupAzureLogin</a>

login block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#login ElastigroupAzure#login}

---

##### `managed_service_identities`<sup>Optional</sup> <a name="managed_service_identities" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.managedServiceIdentities"></a>

```python
managed_service_identities: typing.Union[IResolvable, typing.List[ElastigroupAzureManagedServiceIdentities]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentities">ElastigroupAzureManagedServiceIdentities</a>]]

managed_service_identities block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#managed_service_identities ElastigroupAzure#managed_service_identities}

---

##### `max_size`<sup>Optional</sup> <a name="max_size" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.maxSize"></a>

```python
max_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#max_size ElastigroupAzure#max_size}.

---

##### `min_size`<sup>Optional</sup> <a name="min_size" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.minSize"></a>

```python
min_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#min_size ElastigroupAzure#min_size}.

---

##### `scaling_down_policy`<sup>Optional</sup> <a name="scaling_down_policy" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.scalingDownPolicy"></a>

```python
scaling_down_policy: typing.Union[IResolvable, typing.List[ElastigroupAzureScalingDownPolicy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicy">ElastigroupAzureScalingDownPolicy</a>]]

scaling_down_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#scaling_down_policy ElastigroupAzure#scaling_down_policy}

---

##### `scaling_up_policy`<sup>Optional</sup> <a name="scaling_up_policy" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.scalingUpPolicy"></a>

```python
scaling_up_policy: typing.Union[IResolvable, typing.List[ElastigroupAzureScalingUpPolicy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicy">ElastigroupAzureScalingUpPolicy</a>]]

scaling_up_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#scaling_up_policy ElastigroupAzure#scaling_up_policy}

---

##### `scheduled_task`<sup>Optional</sup> <a name="scheduled_task" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.scheduledTask"></a>

```python
scheduled_task: typing.Union[IResolvable, typing.List[ElastigroupAzureScheduledTask]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTask">ElastigroupAzureScheduledTask</a>]]

scheduled_task block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#scheduled_task ElastigroupAzure#scheduled_task}

---

##### `shutdown_script`<sup>Optional</sup> <a name="shutdown_script" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.shutdownScript"></a>

```python
shutdown_script: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#shutdown_script ElastigroupAzure#shutdown_script}.

---

##### `update_policy`<sup>Optional</sup> <a name="update_policy" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.updatePolicy"></a>

```python
update_policy: ElastigroupAzureUpdatePolicy
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicy">ElastigroupAzureUpdatePolicy</a>

update_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#update_policy ElastigroupAzure#update_policy}

---

##### `user_data`<sup>Optional</sup> <a name="user_data" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.userData"></a>

```python
user_data: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#user_data ElastigroupAzure#user_data}.

---

### ElastigroupAzureHealthCheck <a name="ElastigroupAzureHealthCheck" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheck.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_azure

elastigroupAzure.ElastigroupAzureHealthCheck(
  health_check_type: str,
  auto_healing: typing.Union[bool, IResolvable] = None,
  grace_period: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheck.property.healthCheckType">health_check_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#health_check_type ElastigroupAzure#health_check_type}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheck.property.autoHealing">auto_healing</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#auto_healing ElastigroupAzure#auto_healing}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheck.property.gracePeriod">grace_period</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#grace_period ElastigroupAzure#grace_period}. |

---

##### `health_check_type`<sup>Required</sup> <a name="health_check_type" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheck.property.healthCheckType"></a>

```python
health_check_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#health_check_type ElastigroupAzure#health_check_type}.

---

##### `auto_healing`<sup>Optional</sup> <a name="auto_healing" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheck.property.autoHealing"></a>

```python
auto_healing: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#auto_healing ElastigroupAzure#auto_healing}.

---

##### `grace_period`<sup>Optional</sup> <a name="grace_period" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheck.property.gracePeriod"></a>

```python
grace_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#grace_period ElastigroupAzure#grace_period}.

---

### ElastigroupAzureImage <a name="ElastigroupAzureImage" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImage.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_azure

elastigroupAzure.ElastigroupAzureImage(
  custom: typing.Union[IResolvable, typing.List[ElastigroupAzureImageCustom]] = None,
  marketplace: typing.Union[IResolvable, typing.List[ElastigroupAzureImageMarketplace]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImage.property.custom">custom</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustom">ElastigroupAzureImageCustom</a>]]</code> | custom block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImage.property.marketplace">marketplace</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplace">ElastigroupAzureImageMarketplace</a>]]</code> | marketplace block. |

---

##### `custom`<sup>Optional</sup> <a name="custom" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImage.property.custom"></a>

```python
custom: typing.Union[IResolvable, typing.List[ElastigroupAzureImageCustom]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustom">ElastigroupAzureImageCustom</a>]]

custom block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#custom ElastigroupAzure#custom}

---

##### `marketplace`<sup>Optional</sup> <a name="marketplace" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImage.property.marketplace"></a>

```python
marketplace: typing.Union[IResolvable, typing.List[ElastigroupAzureImageMarketplace]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplace">ElastigroupAzureImageMarketplace</a>]]

marketplace block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#marketplace ElastigroupAzure#marketplace}

---

### ElastigroupAzureImageCustom <a name="ElastigroupAzureImageCustom" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustom"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustom.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_azure

elastigroupAzure.ElastigroupAzureImageCustom(
  image_name: str,
  resource_group_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustom.property.imageName">image_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#image_name ElastigroupAzure#image_name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustom.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#resource_group_name ElastigroupAzure#resource_group_name}. |

---

##### `image_name`<sup>Required</sup> <a name="image_name" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustom.property.imageName"></a>

```python
image_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#image_name ElastigroupAzure#image_name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustom.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#resource_group_name ElastigroupAzure#resource_group_name}.

---

### ElastigroupAzureImageMarketplace <a name="ElastigroupAzureImageMarketplace" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplace"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplace.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_azure

elastigroupAzure.ElastigroupAzureImageMarketplace(
  offer: str,
  publisher: str,
  sku: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplace.property.offer">offer</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#offer ElastigroupAzure#offer}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplace.property.publisher">publisher</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#publisher ElastigroupAzure#publisher}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplace.property.sku">sku</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#sku ElastigroupAzure#sku}. |

---

##### `offer`<sup>Required</sup> <a name="offer" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplace.property.offer"></a>

```python
offer: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#offer ElastigroupAzure#offer}.

---

##### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplace.property.publisher"></a>

```python
publisher: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#publisher ElastigroupAzure#publisher}.

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplace.property.sku"></a>

```python
sku: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#sku ElastigroupAzure#sku}.

---

### ElastigroupAzureIntegrationKubernetes <a name="ElastigroupAzureIntegrationKubernetes" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetes.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_azure

elastigroupAzure.ElastigroupAzureIntegrationKubernetes(
  cluster_identifier: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetes.property.clusterIdentifier">cluster_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#cluster_identifier ElastigroupAzure#cluster_identifier}. |

---

##### `cluster_identifier`<sup>Required</sup> <a name="cluster_identifier" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetes.property.clusterIdentifier"></a>

```python
cluster_identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#cluster_identifier ElastigroupAzure#cluster_identifier}.

---

### ElastigroupAzureIntegrationMultaiRuntime <a name="ElastigroupAzureIntegrationMultaiRuntime" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntime.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_azure

elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntime(
  deployment_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntime.property.deploymentId">deployment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#deployment_id ElastigroupAzure#deployment_id}. |

---

##### `deployment_id`<sup>Required</sup> <a name="deployment_id" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntime.property.deploymentId"></a>

```python
deployment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#deployment_id ElastigroupAzure#deployment_id}.

---

### ElastigroupAzureLoadBalancers <a name="ElastigroupAzureLoadBalancers" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancers.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_azure

elastigroupAzure.ElastigroupAzureLoadBalancers(
  type: str,
  auto_weight: typing.Union[bool, IResolvable] = None,
  balancer_id: str = None,
  target_set_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancers.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#type ElastigroupAzure#type}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancers.property.autoWeight">auto_weight</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#auto_weight ElastigroupAzure#auto_weight}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancers.property.balancerId">balancer_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#balancer_id ElastigroupAzure#balancer_id}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancers.property.targetSetId">target_set_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#target_set_id ElastigroupAzure#target_set_id}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancers.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#type ElastigroupAzure#type}.

---

##### `auto_weight`<sup>Optional</sup> <a name="auto_weight" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancers.property.autoWeight"></a>

```python
auto_weight: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#auto_weight ElastigroupAzure#auto_weight}.

---

##### `balancer_id`<sup>Optional</sup> <a name="balancer_id" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancers.property.balancerId"></a>

```python
balancer_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#balancer_id ElastigroupAzure#balancer_id}.

---

##### `target_set_id`<sup>Optional</sup> <a name="target_set_id" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancers.property.targetSetId"></a>

```python
target_set_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#target_set_id ElastigroupAzure#target_set_id}.

---

### ElastigroupAzureLogin <a name="ElastigroupAzureLogin" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLogin"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLogin.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_azure

elastigroupAzure.ElastigroupAzureLogin(
  user_name: str,
  password: str = None,
  ssh_public_key: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLogin.property.userName">user_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#user_name ElastigroupAzure#user_name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLogin.property.password">password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#password ElastigroupAzure#password}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLogin.property.sshPublicKey">ssh_public_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#ssh_public_key ElastigroupAzure#ssh_public_key}. |

---

##### `user_name`<sup>Required</sup> <a name="user_name" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLogin.property.userName"></a>

```python
user_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#user_name ElastigroupAzure#user_name}.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLogin.property.password"></a>

```python
password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#password ElastigroupAzure#password}.

---

##### `ssh_public_key`<sup>Optional</sup> <a name="ssh_public_key" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLogin.property.sshPublicKey"></a>

```python
ssh_public_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#ssh_public_key ElastigroupAzure#ssh_public_key}.

---

### ElastigroupAzureManagedServiceIdentities <a name="ElastigroupAzureManagedServiceIdentities" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentities"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentities.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_azure

elastigroupAzure.ElastigroupAzureManagedServiceIdentities(
  name: str,
  resource_group_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentities.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#name ElastigroupAzure#name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentities.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#resource_group_name ElastigroupAzure#resource_group_name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentities.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#name ElastigroupAzure#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentities.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#resource_group_name ElastigroupAzure#resource_group_name}.

---

### ElastigroupAzureNetwork <a name="ElastigroupAzureNetwork" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetwork.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_azure

elastigroupAzure.ElastigroupAzureNetwork(
  resource_group_name: str,
  subnet_name: str,
  virtual_network_name: str,
  additional_ip_configs: typing.Union[IResolvable, typing.List[ElastigroupAzureNetworkAdditionalIpConfigs]] = None,
  assign_public_ip: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetwork.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#resource_group_name ElastigroupAzure#resource_group_name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetwork.property.subnetName">subnet_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#subnet_name ElastigroupAzure#subnet_name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetwork.property.virtualNetworkName">virtual_network_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#virtual_network_name ElastigroupAzure#virtual_network_name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetwork.property.additionalIpConfigs">additional_ip_configs</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigs">ElastigroupAzureNetworkAdditionalIpConfigs</a>]]</code> | additional_ip_configs block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetwork.property.assignPublicIp">assign_public_ip</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#assign_public_ip ElastigroupAzure#assign_public_ip}. |

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetwork.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#resource_group_name ElastigroupAzure#resource_group_name}.

---

##### `subnet_name`<sup>Required</sup> <a name="subnet_name" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetwork.property.subnetName"></a>

```python
subnet_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#subnet_name ElastigroupAzure#subnet_name}.

---

##### `virtual_network_name`<sup>Required</sup> <a name="virtual_network_name" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetwork.property.virtualNetworkName"></a>

```python
virtual_network_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#virtual_network_name ElastigroupAzure#virtual_network_name}.

---

##### `additional_ip_configs`<sup>Optional</sup> <a name="additional_ip_configs" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetwork.property.additionalIpConfigs"></a>

```python
additional_ip_configs: typing.Union[IResolvable, typing.List[ElastigroupAzureNetworkAdditionalIpConfigs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigs">ElastigroupAzureNetworkAdditionalIpConfigs</a>]]

additional_ip_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#additional_ip_configs ElastigroupAzure#additional_ip_configs}

---

##### `assign_public_ip`<sup>Optional</sup> <a name="assign_public_ip" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetwork.property.assignPublicIp"></a>

```python
assign_public_ip: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#assign_public_ip ElastigroupAzure#assign_public_ip}.

---

### ElastigroupAzureNetworkAdditionalIpConfigs <a name="ElastigroupAzureNetworkAdditionalIpConfigs" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigs.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_azure

elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigs(
  name: str,
  private_ip_version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigs.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#name ElastigroupAzure#name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigs.property.privateIpVersion">private_ip_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#private_ip_version ElastigroupAzure#private_ip_version}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigs.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#name ElastigroupAzure#name}.

---

##### `private_ip_version`<sup>Optional</sup> <a name="private_ip_version" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigs.property.privateIpVersion"></a>

```python
private_ip_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#private_ip_version ElastigroupAzure#private_ip_version}.

---

### ElastigroupAzureScalingDownPolicy <a name="ElastigroupAzureScalingDownPolicy" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_azure

elastigroupAzure.ElastigroupAzureScalingDownPolicy(
  metric_name: str,
  namespace: str,
  policy_name: str,
  threshold: typing.Union[int, float],
  action_type: str = None,
  adjustment: str = None,
  cooldown: typing.Union[int, float] = None,
  dimensions: typing.Union[IResolvable, typing.List[ElastigroupAzureScalingDownPolicyDimensions]] = None,
  evaluation_periods: typing.Union[int, float] = None,
  maximum: str = None,
  max_target_capacity: str = None,
  minimum: str = None,
  min_target_capacity: str = None,
  operator: str = None,
  period: typing.Union[int, float] = None,
  statistic: str = None,
  target: str = None,
  unit: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicy.property.metricName">metric_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#metric_name ElastigroupAzure#metric_name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicy.property.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#namespace ElastigroupAzure#namespace}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicy.property.policyName">policy_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#policy_name ElastigroupAzure#policy_name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicy.property.threshold">threshold</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#threshold ElastigroupAzure#threshold}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicy.property.actionType">action_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#action_type ElastigroupAzure#action_type}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicy.property.adjustment">adjustment</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#adjustment ElastigroupAzure#adjustment}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicy.property.cooldown">cooldown</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#cooldown ElastigroupAzure#cooldown}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicy.property.dimensions">dimensions</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensions">ElastigroupAzureScalingDownPolicyDimensions</a>]]</code> | dimensions block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicy.property.evaluationPeriods">evaluation_periods</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#evaluation_periods ElastigroupAzure#evaluation_periods}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicy.property.maximum">maximum</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#maximum ElastigroupAzure#maximum}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicy.property.maxTargetCapacity">max_target_capacity</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#max_target_capacity ElastigroupAzure#max_target_capacity}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicy.property.minimum">minimum</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#minimum ElastigroupAzure#minimum}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicy.property.minTargetCapacity">min_target_capacity</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#min_target_capacity ElastigroupAzure#min_target_capacity}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicy.property.operator">operator</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#operator ElastigroupAzure#operator}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicy.property.period">period</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#period ElastigroupAzure#period}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicy.property.statistic">statistic</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#statistic ElastigroupAzure#statistic}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicy.property.target">target</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#target ElastigroupAzure#target}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicy.property.unit">unit</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#unit ElastigroupAzure#unit}. |

---

##### `metric_name`<sup>Required</sup> <a name="metric_name" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicy.property.metricName"></a>

```python
metric_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#metric_name ElastigroupAzure#metric_name}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicy.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#namespace ElastigroupAzure#namespace}.

---

##### `policy_name`<sup>Required</sup> <a name="policy_name" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicy.property.policyName"></a>

```python
policy_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#policy_name ElastigroupAzure#policy_name}.

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicy.property.threshold"></a>

```python
threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#threshold ElastigroupAzure#threshold}.

---

##### `action_type`<sup>Optional</sup> <a name="action_type" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicy.property.actionType"></a>

```python
action_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#action_type ElastigroupAzure#action_type}.

---

##### `adjustment`<sup>Optional</sup> <a name="adjustment" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicy.property.adjustment"></a>

```python
adjustment: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#adjustment ElastigroupAzure#adjustment}.

---

##### `cooldown`<sup>Optional</sup> <a name="cooldown" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicy.property.cooldown"></a>

```python
cooldown: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#cooldown ElastigroupAzure#cooldown}.

---

##### `dimensions`<sup>Optional</sup> <a name="dimensions" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicy.property.dimensions"></a>

```python
dimensions: typing.Union[IResolvable, typing.List[ElastigroupAzureScalingDownPolicyDimensions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensions">ElastigroupAzureScalingDownPolicyDimensions</a>]]

dimensions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#dimensions ElastigroupAzure#dimensions}

---

##### `evaluation_periods`<sup>Optional</sup> <a name="evaluation_periods" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicy.property.evaluationPeriods"></a>

```python
evaluation_periods: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#evaluation_periods ElastigroupAzure#evaluation_periods}.

---

##### `maximum`<sup>Optional</sup> <a name="maximum" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicy.property.maximum"></a>

```python
maximum: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#maximum ElastigroupAzure#maximum}.

---

##### `max_target_capacity`<sup>Optional</sup> <a name="max_target_capacity" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicy.property.maxTargetCapacity"></a>

```python
max_target_capacity: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#max_target_capacity ElastigroupAzure#max_target_capacity}.

---

##### `minimum`<sup>Optional</sup> <a name="minimum" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicy.property.minimum"></a>

```python
minimum: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#minimum ElastigroupAzure#minimum}.

---

##### `min_target_capacity`<sup>Optional</sup> <a name="min_target_capacity" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicy.property.minTargetCapacity"></a>

```python
min_target_capacity: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#min_target_capacity ElastigroupAzure#min_target_capacity}.

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicy.property.operator"></a>

```python
operator: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#operator ElastigroupAzure#operator}.

---

##### `period`<sup>Optional</sup> <a name="period" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicy.property.period"></a>

```python
period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#period ElastigroupAzure#period}.

---

##### `statistic`<sup>Optional</sup> <a name="statistic" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicy.property.statistic"></a>

```python
statistic: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#statistic ElastigroupAzure#statistic}.

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicy.property.target"></a>

```python
target: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#target ElastigroupAzure#target}.

---

##### `unit`<sup>Optional</sup> <a name="unit" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicy.property.unit"></a>

```python
unit: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#unit ElastigroupAzure#unit}.

---

### ElastigroupAzureScalingDownPolicyDimensions <a name="ElastigroupAzureScalingDownPolicyDimensions" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensions.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_azure

elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensions(
  name: str,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensions.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#name ElastigroupAzure#name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensions.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#value ElastigroupAzure#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensions.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#name ElastigroupAzure#name}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensions.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#value ElastigroupAzure#value}.

---

### ElastigroupAzureScalingUpPolicy <a name="ElastigroupAzureScalingUpPolicy" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_azure

elastigroupAzure.ElastigroupAzureScalingUpPolicy(
  metric_name: str,
  namespace: str,
  policy_name: str,
  threshold: typing.Union[int, float],
  action_type: str = None,
  adjustment: str = None,
  cooldown: typing.Union[int, float] = None,
  dimensions: typing.Union[IResolvable, typing.List[ElastigroupAzureScalingUpPolicyDimensions]] = None,
  evaluation_periods: typing.Union[int, float] = None,
  maximum: str = None,
  max_target_capacity: str = None,
  minimum: str = None,
  min_target_capacity: str = None,
  operator: str = None,
  period: typing.Union[int, float] = None,
  statistic: str = None,
  target: str = None,
  unit: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicy.property.metricName">metric_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#metric_name ElastigroupAzure#metric_name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicy.property.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#namespace ElastigroupAzure#namespace}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicy.property.policyName">policy_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#policy_name ElastigroupAzure#policy_name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicy.property.threshold">threshold</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#threshold ElastigroupAzure#threshold}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicy.property.actionType">action_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#action_type ElastigroupAzure#action_type}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicy.property.adjustment">adjustment</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#adjustment ElastigroupAzure#adjustment}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicy.property.cooldown">cooldown</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#cooldown ElastigroupAzure#cooldown}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicy.property.dimensions">dimensions</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensions">ElastigroupAzureScalingUpPolicyDimensions</a>]]</code> | dimensions block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicy.property.evaluationPeriods">evaluation_periods</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#evaluation_periods ElastigroupAzure#evaluation_periods}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicy.property.maximum">maximum</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#maximum ElastigroupAzure#maximum}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicy.property.maxTargetCapacity">max_target_capacity</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#max_target_capacity ElastigroupAzure#max_target_capacity}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicy.property.minimum">minimum</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#minimum ElastigroupAzure#minimum}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicy.property.minTargetCapacity">min_target_capacity</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#min_target_capacity ElastigroupAzure#min_target_capacity}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicy.property.operator">operator</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#operator ElastigroupAzure#operator}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicy.property.period">period</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#period ElastigroupAzure#period}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicy.property.statistic">statistic</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#statistic ElastigroupAzure#statistic}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicy.property.target">target</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#target ElastigroupAzure#target}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicy.property.unit">unit</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#unit ElastigroupAzure#unit}. |

---

##### `metric_name`<sup>Required</sup> <a name="metric_name" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicy.property.metricName"></a>

```python
metric_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#metric_name ElastigroupAzure#metric_name}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicy.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#namespace ElastigroupAzure#namespace}.

---

##### `policy_name`<sup>Required</sup> <a name="policy_name" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicy.property.policyName"></a>

```python
policy_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#policy_name ElastigroupAzure#policy_name}.

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicy.property.threshold"></a>

```python
threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#threshold ElastigroupAzure#threshold}.

---

##### `action_type`<sup>Optional</sup> <a name="action_type" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicy.property.actionType"></a>

```python
action_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#action_type ElastigroupAzure#action_type}.

---

##### `adjustment`<sup>Optional</sup> <a name="adjustment" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicy.property.adjustment"></a>

```python
adjustment: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#adjustment ElastigroupAzure#adjustment}.

---

##### `cooldown`<sup>Optional</sup> <a name="cooldown" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicy.property.cooldown"></a>

```python
cooldown: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#cooldown ElastigroupAzure#cooldown}.

---

##### `dimensions`<sup>Optional</sup> <a name="dimensions" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicy.property.dimensions"></a>

```python
dimensions: typing.Union[IResolvable, typing.List[ElastigroupAzureScalingUpPolicyDimensions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensions">ElastigroupAzureScalingUpPolicyDimensions</a>]]

dimensions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#dimensions ElastigroupAzure#dimensions}

---

##### `evaluation_periods`<sup>Optional</sup> <a name="evaluation_periods" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicy.property.evaluationPeriods"></a>

```python
evaluation_periods: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#evaluation_periods ElastigroupAzure#evaluation_periods}.

---

##### `maximum`<sup>Optional</sup> <a name="maximum" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicy.property.maximum"></a>

```python
maximum: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#maximum ElastigroupAzure#maximum}.

---

##### `max_target_capacity`<sup>Optional</sup> <a name="max_target_capacity" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicy.property.maxTargetCapacity"></a>

```python
max_target_capacity: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#max_target_capacity ElastigroupAzure#max_target_capacity}.

---

##### `minimum`<sup>Optional</sup> <a name="minimum" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicy.property.minimum"></a>

```python
minimum: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#minimum ElastigroupAzure#minimum}.

---

##### `min_target_capacity`<sup>Optional</sup> <a name="min_target_capacity" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicy.property.minTargetCapacity"></a>

```python
min_target_capacity: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#min_target_capacity ElastigroupAzure#min_target_capacity}.

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicy.property.operator"></a>

```python
operator: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#operator ElastigroupAzure#operator}.

---

##### `period`<sup>Optional</sup> <a name="period" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicy.property.period"></a>

```python
period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#period ElastigroupAzure#period}.

---

##### `statistic`<sup>Optional</sup> <a name="statistic" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicy.property.statistic"></a>

```python
statistic: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#statistic ElastigroupAzure#statistic}.

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicy.property.target"></a>

```python
target: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#target ElastigroupAzure#target}.

---

##### `unit`<sup>Optional</sup> <a name="unit" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicy.property.unit"></a>

```python
unit: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#unit ElastigroupAzure#unit}.

---

### ElastigroupAzureScalingUpPolicyDimensions <a name="ElastigroupAzureScalingUpPolicyDimensions" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensions.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_azure

elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensions(
  name: str,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensions.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#name ElastigroupAzure#name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensions.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#value ElastigroupAzure#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensions.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#name ElastigroupAzure#name}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensions.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#value ElastigroupAzure#value}.

---

### ElastigroupAzureScheduledTask <a name="ElastigroupAzureScheduledTask" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTask"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTask.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_azure

elastigroupAzure.ElastigroupAzureScheduledTask(
  cron_expression: str,
  task_type: str,
  adjustment: str = None,
  adjustment_percentage: str = None,
  batch_size_percentage: str = None,
  grace_period: str = None,
  is_enabled: typing.Union[bool, IResolvable] = None,
  scale_max_capacity: str = None,
  scale_min_capacity: str = None,
  scale_target_capacity: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTask.property.cronExpression">cron_expression</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#cron_expression ElastigroupAzure#cron_expression}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTask.property.taskType">task_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#task_type ElastigroupAzure#task_type}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTask.property.adjustment">adjustment</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#adjustment ElastigroupAzure#adjustment}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTask.property.adjustmentPercentage">adjustment_percentage</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#adjustment_percentage ElastigroupAzure#adjustment_percentage}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTask.property.batchSizePercentage">batch_size_percentage</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#batch_size_percentage ElastigroupAzure#batch_size_percentage}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTask.property.gracePeriod">grace_period</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#grace_period ElastigroupAzure#grace_period}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTask.property.isEnabled">is_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#is_enabled ElastigroupAzure#is_enabled}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTask.property.scaleMaxCapacity">scale_max_capacity</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#scale_max_capacity ElastigroupAzure#scale_max_capacity}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTask.property.scaleMinCapacity">scale_min_capacity</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#scale_min_capacity ElastigroupAzure#scale_min_capacity}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTask.property.scaleTargetCapacity">scale_target_capacity</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#scale_target_capacity ElastigroupAzure#scale_target_capacity}. |

---

##### `cron_expression`<sup>Required</sup> <a name="cron_expression" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTask.property.cronExpression"></a>

```python
cron_expression: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#cron_expression ElastigroupAzure#cron_expression}.

---

##### `task_type`<sup>Required</sup> <a name="task_type" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTask.property.taskType"></a>

```python
task_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#task_type ElastigroupAzure#task_type}.

---

##### `adjustment`<sup>Optional</sup> <a name="adjustment" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTask.property.adjustment"></a>

```python
adjustment: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#adjustment ElastigroupAzure#adjustment}.

---

##### `adjustment_percentage`<sup>Optional</sup> <a name="adjustment_percentage" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTask.property.adjustmentPercentage"></a>

```python
adjustment_percentage: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#adjustment_percentage ElastigroupAzure#adjustment_percentage}.

---

##### `batch_size_percentage`<sup>Optional</sup> <a name="batch_size_percentage" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTask.property.batchSizePercentage"></a>

```python
batch_size_percentage: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#batch_size_percentage ElastigroupAzure#batch_size_percentage}.

---

##### `grace_period`<sup>Optional</sup> <a name="grace_period" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTask.property.gracePeriod"></a>

```python
grace_period: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#grace_period ElastigroupAzure#grace_period}.

---

##### `is_enabled`<sup>Optional</sup> <a name="is_enabled" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTask.property.isEnabled"></a>

```python
is_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#is_enabled ElastigroupAzure#is_enabled}.

---

##### `scale_max_capacity`<sup>Optional</sup> <a name="scale_max_capacity" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTask.property.scaleMaxCapacity"></a>

```python
scale_max_capacity: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#scale_max_capacity ElastigroupAzure#scale_max_capacity}.

---

##### `scale_min_capacity`<sup>Optional</sup> <a name="scale_min_capacity" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTask.property.scaleMinCapacity"></a>

```python
scale_min_capacity: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#scale_min_capacity ElastigroupAzure#scale_min_capacity}.

---

##### `scale_target_capacity`<sup>Optional</sup> <a name="scale_target_capacity" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTask.property.scaleTargetCapacity"></a>

```python
scale_target_capacity: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#scale_target_capacity ElastigroupAzure#scale_target_capacity}.

---

### ElastigroupAzureStrategy <a name="ElastigroupAzureStrategy" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategy.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_azure

elastigroupAzure.ElastigroupAzureStrategy(
  draining_timeout: typing.Union[int, float] = None,
  low_priority_percentage: typing.Union[int, float] = None,
  od_count: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategy.property.drainingTimeout">draining_timeout</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#draining_timeout ElastigroupAzure#draining_timeout}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategy.property.lowPriorityPercentage">low_priority_percentage</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#low_priority_percentage ElastigroupAzure#low_priority_percentage}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategy.property.odCount">od_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#od_count ElastigroupAzure#od_count}. |

---

##### `draining_timeout`<sup>Optional</sup> <a name="draining_timeout" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategy.property.drainingTimeout"></a>

```python
draining_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#draining_timeout ElastigroupAzure#draining_timeout}.

---

##### `low_priority_percentage`<sup>Optional</sup> <a name="low_priority_percentage" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategy.property.lowPriorityPercentage"></a>

```python
low_priority_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#low_priority_percentage ElastigroupAzure#low_priority_percentage}.

---

##### `od_count`<sup>Optional</sup> <a name="od_count" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategy.property.odCount"></a>

```python
od_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#od_count ElastigroupAzure#od_count}.

---

### ElastigroupAzureUpdatePolicy <a name="ElastigroupAzureUpdatePolicy" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_azure

elastigroupAzure.ElastigroupAzureUpdatePolicy(
  should_roll: typing.Union[bool, IResolvable],
  roll_config: ElastigroupAzureUpdatePolicyRollConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicy.property.shouldRoll">should_roll</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#should_roll ElastigroupAzure#should_roll}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicy.property.rollConfig">roll_config</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfig">ElastigroupAzureUpdatePolicyRollConfig</a></code> | roll_config block. |

---

##### `should_roll`<sup>Required</sup> <a name="should_roll" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicy.property.shouldRoll"></a>

```python
should_roll: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#should_roll ElastigroupAzure#should_roll}.

---

##### `roll_config`<sup>Optional</sup> <a name="roll_config" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicy.property.rollConfig"></a>

```python
roll_config: ElastigroupAzureUpdatePolicyRollConfig
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfig">ElastigroupAzureUpdatePolicyRollConfig</a>

roll_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#roll_config ElastigroupAzure#roll_config}

---

### ElastigroupAzureUpdatePolicyRollConfig <a name="ElastigroupAzureUpdatePolicyRollConfig" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_azure

elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfig(
  batch_size_percentage: typing.Union[int, float],
  grace_period: typing.Union[int, float] = None,
  health_check_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfig.property.batchSizePercentage">batch_size_percentage</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#batch_size_percentage ElastigroupAzure#batch_size_percentage}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfig.property.gracePeriod">grace_period</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#grace_period ElastigroupAzure#grace_period}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfig.property.healthCheckType">health_check_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#health_check_type ElastigroupAzure#health_check_type}. |

---

##### `batch_size_percentage`<sup>Required</sup> <a name="batch_size_percentage" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfig.property.batchSizePercentage"></a>

```python
batch_size_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#batch_size_percentage ElastigroupAzure#batch_size_percentage}.

---

##### `grace_period`<sup>Optional</sup> <a name="grace_period" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfig.property.gracePeriod"></a>

```python
grace_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#grace_period ElastigroupAzure#grace_period}.

---

##### `health_check_type`<sup>Optional</sup> <a name="health_check_type" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfig.property.healthCheckType"></a>

```python
health_check_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#health_check_type ElastigroupAzure#health_check_type}.

---

## Classes <a name="Classes" id="Classes"></a>

### ElastigroupAzureHealthCheckOutputReference <a name="ElastigroupAzureHealthCheckOutputReference" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_azure

elastigroupAzure.ElastigroupAzureHealthCheckOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.resetAutoHealing">reset_auto_healing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.resetGracePeriod">reset_grace_period</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_auto_healing` <a name="reset_auto_healing" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.resetAutoHealing"></a>

```python
def reset_auto_healing() -> None
```

##### `reset_grace_period` <a name="reset_grace_period" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.resetGracePeriod"></a>

```python
def reset_grace_period() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.property.autoHealingInput">auto_healing_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.property.gracePeriodInput">grace_period_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.property.healthCheckTypeInput">health_check_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.property.autoHealing">auto_healing</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.property.gracePeriod">grace_period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.property.healthCheckType">health_check_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheck">ElastigroupAzureHealthCheck</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auto_healing_input`<sup>Optional</sup> <a name="auto_healing_input" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.property.autoHealingInput"></a>

```python
auto_healing_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `grace_period_input`<sup>Optional</sup> <a name="grace_period_input" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.property.gracePeriodInput"></a>

```python
grace_period_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `health_check_type_input`<sup>Optional</sup> <a name="health_check_type_input" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.property.healthCheckTypeInput"></a>

```python
health_check_type_input: str
```

- *Type:* str

---

##### `auto_healing`<sup>Required</sup> <a name="auto_healing" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.property.autoHealing"></a>

```python
auto_healing: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `grace_period`<sup>Required</sup> <a name="grace_period" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.property.gracePeriod"></a>

```python
grace_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `health_check_type`<sup>Required</sup> <a name="health_check_type" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.property.healthCheckType"></a>

```python
health_check_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.property.internalValue"></a>

```python
internal_value: ElastigroupAzureHealthCheck
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheck">ElastigroupAzureHealthCheck</a>

---


### ElastigroupAzureImageCustomList <a name="ElastigroupAzureImageCustomList" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_azure

elastigroupAzure.ElastigroupAzureImageCustomList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ElastigroupAzureImageCustomOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustom">ElastigroupAzureImageCustom</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ElastigroupAzureImageCustom]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustom">ElastigroupAzureImageCustom</a>]]

---


### ElastigroupAzureImageCustomOutputReference <a name="ElastigroupAzureImageCustomOutputReference" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_azure

elastigroupAzure.ElastigroupAzureImageCustomOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.property.imageNameInput">image_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.property.imageName">image_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustom">ElastigroupAzureImageCustom</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `image_name_input`<sup>Optional</sup> <a name="image_name_input" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.property.imageNameInput"></a>

```python
image_name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `image_name`<sup>Required</sup> <a name="image_name" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.property.imageName"></a>

```python
image_name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ElastigroupAzureImageCustom]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustom">ElastigroupAzureImageCustom</a>]

---


### ElastigroupAzureImageList <a name="ElastigroupAzureImageList" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_azure

elastigroupAzure.ElastigroupAzureImageList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ElastigroupAzureImageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImage">ElastigroupAzureImage</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ElastigroupAzureImage]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImage">ElastigroupAzureImage</a>]]

---


### ElastigroupAzureImageMarketplaceList <a name="ElastigroupAzureImageMarketplaceList" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_azure

elastigroupAzure.ElastigroupAzureImageMarketplaceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ElastigroupAzureImageMarketplaceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplace">ElastigroupAzureImageMarketplace</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ElastigroupAzureImageMarketplace]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplace">ElastigroupAzureImageMarketplace</a>]]

---


### ElastigroupAzureImageMarketplaceOutputReference <a name="ElastigroupAzureImageMarketplaceOutputReference" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_azure

elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.property.offerInput">offer_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.property.publisherInput">publisher_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.property.skuInput">sku_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.property.offer">offer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.property.publisher">publisher</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.property.sku">sku</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplace">ElastigroupAzureImageMarketplace</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `offer_input`<sup>Optional</sup> <a name="offer_input" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.property.offerInput"></a>

```python
offer_input: str
```

- *Type:* str

---

##### `publisher_input`<sup>Optional</sup> <a name="publisher_input" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.property.publisherInput"></a>

```python
publisher_input: str
```

- *Type:* str

---

##### `sku_input`<sup>Optional</sup> <a name="sku_input" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.property.skuInput"></a>

```python
sku_input: str
```

- *Type:* str

---

##### `offer`<sup>Required</sup> <a name="offer" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.property.offer"></a>

```python
offer: str
```

- *Type:* str

---

##### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.property.publisher"></a>

```python
publisher: str
```

- *Type:* str

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.property.sku"></a>

```python
sku: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ElastigroupAzureImageMarketplace]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplace">ElastigroupAzureImageMarketplace</a>]

---


### ElastigroupAzureImageOutputReference <a name="ElastigroupAzureImageOutputReference" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_azure

elastigroupAzure.ElastigroupAzureImageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.putCustom">put_custom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.putMarketplace">put_marketplace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.resetCustom">reset_custom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.resetMarketplace">reset_marketplace</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_custom` <a name="put_custom" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.putCustom"></a>

```python
def put_custom(
  value: typing.Union[IResolvable, typing.List[ElastigroupAzureImageCustom]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.putCustom.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustom">ElastigroupAzureImageCustom</a>]]

---

##### `put_marketplace` <a name="put_marketplace" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.putMarketplace"></a>

```python
def put_marketplace(
  value: typing.Union[IResolvable, typing.List[ElastigroupAzureImageMarketplace]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.putMarketplace.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplace">ElastigroupAzureImageMarketplace</a>]]

---

##### `reset_custom` <a name="reset_custom" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.resetCustom"></a>

```python
def reset_custom() -> None
```

##### `reset_marketplace` <a name="reset_marketplace" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.resetMarketplace"></a>

```python
def reset_marketplace() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.property.custom">custom</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomList">ElastigroupAzureImageCustomList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.property.marketplace">marketplace</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceList">ElastigroupAzureImageMarketplaceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.property.customInput">custom_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustom">ElastigroupAzureImageCustom</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.property.marketplaceInput">marketplace_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplace">ElastigroupAzureImageMarketplace</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImage">ElastigroupAzureImage</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom`<sup>Required</sup> <a name="custom" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.property.custom"></a>

```python
custom: ElastigroupAzureImageCustomList
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomList">ElastigroupAzureImageCustomList</a>

---

##### `marketplace`<sup>Required</sup> <a name="marketplace" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.property.marketplace"></a>

```python
marketplace: ElastigroupAzureImageMarketplaceList
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceList">ElastigroupAzureImageMarketplaceList</a>

---

##### `custom_input`<sup>Optional</sup> <a name="custom_input" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.property.customInput"></a>

```python
custom_input: typing.Union[IResolvable, typing.List[ElastigroupAzureImageCustom]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustom">ElastigroupAzureImageCustom</a>]]

---

##### `marketplace_input`<sup>Optional</sup> <a name="marketplace_input" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.property.marketplaceInput"></a>

```python
marketplace_input: typing.Union[IResolvable, typing.List[ElastigroupAzureImageMarketplace]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplace">ElastigroupAzureImageMarketplace</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ElastigroupAzureImage]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImage">ElastigroupAzureImage</a>]

---


### ElastigroupAzureIntegrationKubernetesOutputReference <a name="ElastigroupAzureIntegrationKubernetesOutputReference" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_azure

elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.property.clusterIdentifierInput">cluster_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.property.clusterIdentifier">cluster_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetes">ElastigroupAzureIntegrationKubernetes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cluster_identifier_input`<sup>Optional</sup> <a name="cluster_identifier_input" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.property.clusterIdentifierInput"></a>

```python
cluster_identifier_input: str
```

- *Type:* str

---

##### `cluster_identifier`<sup>Required</sup> <a name="cluster_identifier" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.property.clusterIdentifier"></a>

```python
cluster_identifier: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.property.internalValue"></a>

```python
internal_value: ElastigroupAzureIntegrationKubernetes
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetes">ElastigroupAzureIntegrationKubernetes</a>

---


### ElastigroupAzureIntegrationMultaiRuntimeOutputReference <a name="ElastigroupAzureIntegrationMultaiRuntimeOutputReference" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_azure

elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.property.deploymentIdInput">deployment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.property.deploymentId">deployment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntime">ElastigroupAzureIntegrationMultaiRuntime</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `deployment_id_input`<sup>Optional</sup> <a name="deployment_id_input" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.property.deploymentIdInput"></a>

```python
deployment_id_input: str
```

- *Type:* str

---

##### `deployment_id`<sup>Required</sup> <a name="deployment_id" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.property.deploymentId"></a>

```python
deployment_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.property.internalValue"></a>

```python
internal_value: ElastigroupAzureIntegrationMultaiRuntime
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntime">ElastigroupAzureIntegrationMultaiRuntime</a>

---


### ElastigroupAzureLoadBalancersList <a name="ElastigroupAzureLoadBalancersList" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_azure

elastigroupAzure.ElastigroupAzureLoadBalancersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ElastigroupAzureLoadBalancersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancers">ElastigroupAzureLoadBalancers</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ElastigroupAzureLoadBalancers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancers">ElastigroupAzureLoadBalancers</a>]]

---


### ElastigroupAzureLoadBalancersOutputReference <a name="ElastigroupAzureLoadBalancersOutputReference" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_azure

elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.resetAutoWeight">reset_auto_weight</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.resetBalancerId">reset_balancer_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.resetTargetSetId">reset_target_set_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_auto_weight` <a name="reset_auto_weight" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.resetAutoWeight"></a>

```python
def reset_auto_weight() -> None
```

##### `reset_balancer_id` <a name="reset_balancer_id" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.resetBalancerId"></a>

```python
def reset_balancer_id() -> None
```

##### `reset_target_set_id` <a name="reset_target_set_id" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.resetTargetSetId"></a>

```python
def reset_target_set_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.property.autoWeightInput">auto_weight_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.property.balancerIdInput">balancer_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.property.targetSetIdInput">target_set_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.property.autoWeight">auto_weight</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.property.balancerId">balancer_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.property.targetSetId">target_set_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancers">ElastigroupAzureLoadBalancers</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auto_weight_input`<sup>Optional</sup> <a name="auto_weight_input" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.property.autoWeightInput"></a>

```python
auto_weight_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `balancer_id_input`<sup>Optional</sup> <a name="balancer_id_input" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.property.balancerIdInput"></a>

```python
balancer_id_input: str
```

- *Type:* str

---

##### `target_set_id_input`<sup>Optional</sup> <a name="target_set_id_input" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.property.targetSetIdInput"></a>

```python
target_set_id_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `auto_weight`<sup>Required</sup> <a name="auto_weight" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.property.autoWeight"></a>

```python
auto_weight: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `balancer_id`<sup>Required</sup> <a name="balancer_id" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.property.balancerId"></a>

```python
balancer_id: str
```

- *Type:* str

---

##### `target_set_id`<sup>Required</sup> <a name="target_set_id" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.property.targetSetId"></a>

```python
target_set_id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ElastigroupAzureLoadBalancers]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancers">ElastigroupAzureLoadBalancers</a>]

---


### ElastigroupAzureLoginOutputReference <a name="ElastigroupAzureLoginOutputReference" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_azure

elastigroupAzure.ElastigroupAzureLoginOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.resetPassword">reset_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.resetSshPublicKey">reset_ssh_public_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_password` <a name="reset_password" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.resetPassword"></a>

```python
def reset_password() -> None
```

##### `reset_ssh_public_key` <a name="reset_ssh_public_key" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.resetSshPublicKey"></a>

```python
def reset_ssh_public_key() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.property.sshPublicKeyInput">ssh_public_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.property.userNameInput">user_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.property.sshPublicKey">ssh_public_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.property.userName">user_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLogin">ElastigroupAzureLogin</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `ssh_public_key_input`<sup>Optional</sup> <a name="ssh_public_key_input" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.property.sshPublicKeyInput"></a>

```python
ssh_public_key_input: str
```

- *Type:* str

---

##### `user_name_input`<sup>Optional</sup> <a name="user_name_input" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.property.userNameInput"></a>

```python
user_name_input: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `ssh_public_key`<sup>Required</sup> <a name="ssh_public_key" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.property.sshPublicKey"></a>

```python
ssh_public_key: str
```

- *Type:* str

---

##### `user_name`<sup>Required</sup> <a name="user_name" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.property.userName"></a>

```python
user_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.property.internalValue"></a>

```python
internal_value: ElastigroupAzureLogin
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLogin">ElastigroupAzureLogin</a>

---


### ElastigroupAzureManagedServiceIdentitiesList <a name="ElastigroupAzureManagedServiceIdentitiesList" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_azure

elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ElastigroupAzureManagedServiceIdentitiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentities">ElastigroupAzureManagedServiceIdentities</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ElastigroupAzureManagedServiceIdentities]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentities">ElastigroupAzureManagedServiceIdentities</a>]]

---


### ElastigroupAzureManagedServiceIdentitiesOutputReference <a name="ElastigroupAzureManagedServiceIdentitiesOutputReference" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_azure

elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentities">ElastigroupAzureManagedServiceIdentities</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ElastigroupAzureManagedServiceIdentities]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentities">ElastigroupAzureManagedServiceIdentities</a>]

---


### ElastigroupAzureNetworkAdditionalIpConfigsList <a name="ElastigroupAzureNetworkAdditionalIpConfigsList" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_azure

elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ElastigroupAzureNetworkAdditionalIpConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigs">ElastigroupAzureNetworkAdditionalIpConfigs</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ElastigroupAzureNetworkAdditionalIpConfigs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigs">ElastigroupAzureNetworkAdditionalIpConfigs</a>]]

---


### ElastigroupAzureNetworkAdditionalIpConfigsOutputReference <a name="ElastigroupAzureNetworkAdditionalIpConfigsOutputReference" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_azure

elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.resetPrivateIpVersion">reset_private_ip_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_private_ip_version` <a name="reset_private_ip_version" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.resetPrivateIpVersion"></a>

```python
def reset_private_ip_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.property.privateIpVersionInput">private_ip_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.property.privateIpVersion">private_ip_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigs">ElastigroupAzureNetworkAdditionalIpConfigs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `private_ip_version_input`<sup>Optional</sup> <a name="private_ip_version_input" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.property.privateIpVersionInput"></a>

```python
private_ip_version_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `private_ip_version`<sup>Required</sup> <a name="private_ip_version" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.property.privateIpVersion"></a>

```python
private_ip_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ElastigroupAzureNetworkAdditionalIpConfigs]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigs">ElastigroupAzureNetworkAdditionalIpConfigs</a>]

---


### ElastigroupAzureNetworkOutputReference <a name="ElastigroupAzureNetworkOutputReference" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_azure

elastigroupAzure.ElastigroupAzureNetworkOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.putAdditionalIpConfigs">put_additional_ip_configs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.resetAdditionalIpConfigs">reset_additional_ip_configs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.resetAssignPublicIp">reset_assign_public_ip</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_additional_ip_configs` <a name="put_additional_ip_configs" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.putAdditionalIpConfigs"></a>

```python
def put_additional_ip_configs(
  value: typing.Union[IResolvable, typing.List[ElastigroupAzureNetworkAdditionalIpConfigs]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.putAdditionalIpConfigs.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigs">ElastigroupAzureNetworkAdditionalIpConfigs</a>]]

---

##### `reset_additional_ip_configs` <a name="reset_additional_ip_configs" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.resetAdditionalIpConfigs"></a>

```python
def reset_additional_ip_configs() -> None
```

##### `reset_assign_public_ip` <a name="reset_assign_public_ip" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.resetAssignPublicIp"></a>

```python
def reset_assign_public_ip() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.property.additionalIpConfigs">additional_ip_configs</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsList">ElastigroupAzureNetworkAdditionalIpConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.property.additionalIpConfigsInput">additional_ip_configs_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigs">ElastigroupAzureNetworkAdditionalIpConfigs</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.property.assignPublicIpInput">assign_public_ip_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.property.subnetNameInput">subnet_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.property.virtualNetworkNameInput">virtual_network_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.property.assignPublicIp">assign_public_ip</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.property.subnetName">subnet_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.property.virtualNetworkName">virtual_network_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetwork">ElastigroupAzureNetwork</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `additional_ip_configs`<sup>Required</sup> <a name="additional_ip_configs" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.property.additionalIpConfigs"></a>

```python
additional_ip_configs: ElastigroupAzureNetworkAdditionalIpConfigsList
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsList">ElastigroupAzureNetworkAdditionalIpConfigsList</a>

---

##### `additional_ip_configs_input`<sup>Optional</sup> <a name="additional_ip_configs_input" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.property.additionalIpConfigsInput"></a>

```python
additional_ip_configs_input: typing.Union[IResolvable, typing.List[ElastigroupAzureNetworkAdditionalIpConfigs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigs">ElastigroupAzureNetworkAdditionalIpConfigs</a>]]

---

##### `assign_public_ip_input`<sup>Optional</sup> <a name="assign_public_ip_input" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.property.assignPublicIpInput"></a>

```python
assign_public_ip_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `subnet_name_input`<sup>Optional</sup> <a name="subnet_name_input" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.property.subnetNameInput"></a>

```python
subnet_name_input: str
```

- *Type:* str

---

##### `virtual_network_name_input`<sup>Optional</sup> <a name="virtual_network_name_input" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.property.virtualNetworkNameInput"></a>

```python
virtual_network_name_input: str
```

- *Type:* str

---

##### `assign_public_ip`<sup>Required</sup> <a name="assign_public_ip" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.property.assignPublicIp"></a>

```python
assign_public_ip: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `subnet_name`<sup>Required</sup> <a name="subnet_name" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.property.subnetName"></a>

```python
subnet_name: str
```

- *Type:* str

---

##### `virtual_network_name`<sup>Required</sup> <a name="virtual_network_name" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.property.virtualNetworkName"></a>

```python
virtual_network_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.property.internalValue"></a>

```python
internal_value: ElastigroupAzureNetwork
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetwork">ElastigroupAzureNetwork</a>

---


### ElastigroupAzureScalingDownPolicyDimensionsList <a name="ElastigroupAzureScalingDownPolicyDimensionsList" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_azure

elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ElastigroupAzureScalingDownPolicyDimensionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensions">ElastigroupAzureScalingDownPolicyDimensions</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ElastigroupAzureScalingDownPolicyDimensions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensions">ElastigroupAzureScalingDownPolicyDimensions</a>]]

---


### ElastigroupAzureScalingDownPolicyDimensionsOutputReference <a name="ElastigroupAzureScalingDownPolicyDimensionsOutputReference" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_azure

elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_value` <a name="reset_value" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensions">ElastigroupAzureScalingDownPolicyDimensions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ElastigroupAzureScalingDownPolicyDimensions]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensions">ElastigroupAzureScalingDownPolicyDimensions</a>]

---


### ElastigroupAzureScalingDownPolicyList <a name="ElastigroupAzureScalingDownPolicyList" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_azure

elastigroupAzure.ElastigroupAzureScalingDownPolicyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ElastigroupAzureScalingDownPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicy">ElastigroupAzureScalingDownPolicy</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ElastigroupAzureScalingDownPolicy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicy">ElastigroupAzureScalingDownPolicy</a>]]

---


### ElastigroupAzureScalingDownPolicyOutputReference <a name="ElastigroupAzureScalingDownPolicyOutputReference" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_azure

elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.putDimensions">put_dimensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.resetActionType">reset_action_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.resetAdjustment">reset_adjustment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.resetCooldown">reset_cooldown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.resetDimensions">reset_dimensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.resetEvaluationPeriods">reset_evaluation_periods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.resetMaximum">reset_maximum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.resetMaxTargetCapacity">reset_max_target_capacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.resetMinimum">reset_minimum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.resetMinTargetCapacity">reset_min_target_capacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.resetOperator">reset_operator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.resetPeriod">reset_period</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.resetStatistic">reset_statistic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.resetTarget">reset_target</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.resetUnit">reset_unit</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_dimensions` <a name="put_dimensions" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.putDimensions"></a>

```python
def put_dimensions(
  value: typing.Union[IResolvable, typing.List[ElastigroupAzureScalingDownPolicyDimensions]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.putDimensions.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensions">ElastigroupAzureScalingDownPolicyDimensions</a>]]

---

##### `reset_action_type` <a name="reset_action_type" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.resetActionType"></a>

```python
def reset_action_type() -> None
```

##### `reset_adjustment` <a name="reset_adjustment" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.resetAdjustment"></a>

```python
def reset_adjustment() -> None
```

##### `reset_cooldown` <a name="reset_cooldown" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.resetCooldown"></a>

```python
def reset_cooldown() -> None
```

##### `reset_dimensions` <a name="reset_dimensions" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.resetDimensions"></a>

```python
def reset_dimensions() -> None
```

##### `reset_evaluation_periods` <a name="reset_evaluation_periods" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.resetEvaluationPeriods"></a>

```python
def reset_evaluation_periods() -> None
```

##### `reset_maximum` <a name="reset_maximum" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.resetMaximum"></a>

```python
def reset_maximum() -> None
```

##### `reset_max_target_capacity` <a name="reset_max_target_capacity" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.resetMaxTargetCapacity"></a>

```python
def reset_max_target_capacity() -> None
```

##### `reset_minimum` <a name="reset_minimum" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.resetMinimum"></a>

```python
def reset_minimum() -> None
```

##### `reset_min_target_capacity` <a name="reset_min_target_capacity" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.resetMinTargetCapacity"></a>

```python
def reset_min_target_capacity() -> None
```

##### `reset_operator` <a name="reset_operator" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.resetOperator"></a>

```python
def reset_operator() -> None
```

##### `reset_period` <a name="reset_period" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.resetPeriod"></a>

```python
def reset_period() -> None
```

##### `reset_statistic` <a name="reset_statistic" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.resetStatistic"></a>

```python
def reset_statistic() -> None
```

##### `reset_target` <a name="reset_target" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.resetTarget"></a>

```python
def reset_target() -> None
```

##### `reset_unit` <a name="reset_unit" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.resetUnit"></a>

```python
def reset_unit() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.dimensions">dimensions</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsList">ElastigroupAzureScalingDownPolicyDimensionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.actionTypeInput">action_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.adjustmentInput">adjustment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.cooldownInput">cooldown_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.dimensionsInput">dimensions_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensions">ElastigroupAzureScalingDownPolicyDimensions</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.evaluationPeriodsInput">evaluation_periods_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.maximumInput">maximum_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.maxTargetCapacityInput">max_target_capacity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.metricNameInput">metric_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.minimumInput">minimum_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.minTargetCapacityInput">min_target_capacity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.operatorInput">operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.periodInput">period_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.policyNameInput">policy_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.statisticInput">statistic_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.targetInput">target_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.thresholdInput">threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.unitInput">unit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.actionType">action_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.adjustment">adjustment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.cooldown">cooldown</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.evaluationPeriods">evaluation_periods</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.maximum">maximum</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.maxTargetCapacity">max_target_capacity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.metricName">metric_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.minimum">minimum</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.minTargetCapacity">min_target_capacity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.period">period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.policyName">policy_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.statistic">statistic</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.target">target</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.threshold">threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.unit">unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicy">ElastigroupAzureScalingDownPolicy</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.dimensions"></a>

```python
dimensions: ElastigroupAzureScalingDownPolicyDimensionsList
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsList">ElastigroupAzureScalingDownPolicyDimensionsList</a>

---

##### `action_type_input`<sup>Optional</sup> <a name="action_type_input" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.actionTypeInput"></a>

```python
action_type_input: str
```

- *Type:* str

---

##### `adjustment_input`<sup>Optional</sup> <a name="adjustment_input" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.adjustmentInput"></a>

```python
adjustment_input: str
```

- *Type:* str

---

##### `cooldown_input`<sup>Optional</sup> <a name="cooldown_input" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.cooldownInput"></a>

```python
cooldown_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `dimensions_input`<sup>Optional</sup> <a name="dimensions_input" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.dimensionsInput"></a>

```python
dimensions_input: typing.Union[IResolvable, typing.List[ElastigroupAzureScalingDownPolicyDimensions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensions">ElastigroupAzureScalingDownPolicyDimensions</a>]]

---

##### `evaluation_periods_input`<sup>Optional</sup> <a name="evaluation_periods_input" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.evaluationPeriodsInput"></a>

```python
evaluation_periods_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `maximum_input`<sup>Optional</sup> <a name="maximum_input" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.maximumInput"></a>

```python
maximum_input: str
```

- *Type:* str

---

##### `max_target_capacity_input`<sup>Optional</sup> <a name="max_target_capacity_input" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.maxTargetCapacityInput"></a>

```python
max_target_capacity_input: str
```

- *Type:* str

---

##### `metric_name_input`<sup>Optional</sup> <a name="metric_name_input" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.metricNameInput"></a>

```python
metric_name_input: str
```

- *Type:* str

---

##### `minimum_input`<sup>Optional</sup> <a name="minimum_input" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.minimumInput"></a>

```python
minimum_input: str
```

- *Type:* str

---

##### `min_target_capacity_input`<sup>Optional</sup> <a name="min_target_capacity_input" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.minTargetCapacityInput"></a>

```python
min_target_capacity_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `operator_input`<sup>Optional</sup> <a name="operator_input" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.operatorInput"></a>

```python
operator_input: str
```

- *Type:* str

---

##### `period_input`<sup>Optional</sup> <a name="period_input" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.periodInput"></a>

```python
period_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `policy_name_input`<sup>Optional</sup> <a name="policy_name_input" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.policyNameInput"></a>

```python
policy_name_input: str
```

- *Type:* str

---

##### `statistic_input`<sup>Optional</sup> <a name="statistic_input" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.statisticInput"></a>

```python
statistic_input: str
```

- *Type:* str

---

##### `target_input`<sup>Optional</sup> <a name="target_input" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.targetInput"></a>

```python
target_input: str
```

- *Type:* str

---

##### `threshold_input`<sup>Optional</sup> <a name="threshold_input" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.thresholdInput"></a>

```python
threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `unit_input`<sup>Optional</sup> <a name="unit_input" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.unitInput"></a>

```python
unit_input: str
```

- *Type:* str

---

##### `action_type`<sup>Required</sup> <a name="action_type" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.actionType"></a>

```python
action_type: str
```

- *Type:* str

---

##### `adjustment`<sup>Required</sup> <a name="adjustment" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.adjustment"></a>

```python
adjustment: str
```

- *Type:* str

---

##### `cooldown`<sup>Required</sup> <a name="cooldown" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.cooldown"></a>

```python
cooldown: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `evaluation_periods`<sup>Required</sup> <a name="evaluation_periods" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.evaluationPeriods"></a>

```python
evaluation_periods: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `maximum`<sup>Required</sup> <a name="maximum" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.maximum"></a>

```python
maximum: str
```

- *Type:* str

---

##### `max_target_capacity`<sup>Required</sup> <a name="max_target_capacity" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.maxTargetCapacity"></a>

```python
max_target_capacity: str
```

- *Type:* str

---

##### `metric_name`<sup>Required</sup> <a name="metric_name" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.metricName"></a>

```python
metric_name: str
```

- *Type:* str

---

##### `minimum`<sup>Required</sup> <a name="minimum" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.minimum"></a>

```python
minimum: str
```

- *Type:* str

---

##### `min_target_capacity`<sup>Required</sup> <a name="min_target_capacity" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.minTargetCapacity"></a>

```python
min_target_capacity: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.period"></a>

```python
period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `policy_name`<sup>Required</sup> <a name="policy_name" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.policyName"></a>

```python
policy_name: str
```

- *Type:* str

---

##### `statistic`<sup>Required</sup> <a name="statistic" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.statistic"></a>

```python
statistic: str
```

- *Type:* str

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.target"></a>

```python
target: str
```

- *Type:* str

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.threshold"></a>

```python
threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.unit"></a>

```python
unit: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ElastigroupAzureScalingDownPolicy]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicy">ElastigroupAzureScalingDownPolicy</a>]

---


### ElastigroupAzureScalingUpPolicyDimensionsList <a name="ElastigroupAzureScalingUpPolicyDimensionsList" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_azure

elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ElastigroupAzureScalingUpPolicyDimensionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensions">ElastigroupAzureScalingUpPolicyDimensions</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ElastigroupAzureScalingUpPolicyDimensions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensions">ElastigroupAzureScalingUpPolicyDimensions</a>]]

---


### ElastigroupAzureScalingUpPolicyDimensionsOutputReference <a name="ElastigroupAzureScalingUpPolicyDimensionsOutputReference" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_azure

elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_value` <a name="reset_value" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensions">ElastigroupAzureScalingUpPolicyDimensions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ElastigroupAzureScalingUpPolicyDimensions]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensions">ElastigroupAzureScalingUpPolicyDimensions</a>]

---


### ElastigroupAzureScalingUpPolicyList <a name="ElastigroupAzureScalingUpPolicyList" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_azure

elastigroupAzure.ElastigroupAzureScalingUpPolicyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ElastigroupAzureScalingUpPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicy">ElastigroupAzureScalingUpPolicy</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ElastigroupAzureScalingUpPolicy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicy">ElastigroupAzureScalingUpPolicy</a>]]

---


### ElastigroupAzureScalingUpPolicyOutputReference <a name="ElastigroupAzureScalingUpPolicyOutputReference" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_azure

elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.putDimensions">put_dimensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.resetActionType">reset_action_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.resetAdjustment">reset_adjustment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.resetCooldown">reset_cooldown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.resetDimensions">reset_dimensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.resetEvaluationPeriods">reset_evaluation_periods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.resetMaximum">reset_maximum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.resetMaxTargetCapacity">reset_max_target_capacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.resetMinimum">reset_minimum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.resetMinTargetCapacity">reset_min_target_capacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.resetOperator">reset_operator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.resetPeriod">reset_period</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.resetStatistic">reset_statistic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.resetTarget">reset_target</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.resetUnit">reset_unit</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_dimensions` <a name="put_dimensions" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.putDimensions"></a>

```python
def put_dimensions(
  value: typing.Union[IResolvable, typing.List[ElastigroupAzureScalingUpPolicyDimensions]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.putDimensions.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensions">ElastigroupAzureScalingUpPolicyDimensions</a>]]

---

##### `reset_action_type` <a name="reset_action_type" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.resetActionType"></a>

```python
def reset_action_type() -> None
```

##### `reset_adjustment` <a name="reset_adjustment" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.resetAdjustment"></a>

```python
def reset_adjustment() -> None
```

##### `reset_cooldown` <a name="reset_cooldown" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.resetCooldown"></a>

```python
def reset_cooldown() -> None
```

##### `reset_dimensions` <a name="reset_dimensions" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.resetDimensions"></a>

```python
def reset_dimensions() -> None
```

##### `reset_evaluation_periods` <a name="reset_evaluation_periods" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.resetEvaluationPeriods"></a>

```python
def reset_evaluation_periods() -> None
```

##### `reset_maximum` <a name="reset_maximum" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.resetMaximum"></a>

```python
def reset_maximum() -> None
```

##### `reset_max_target_capacity` <a name="reset_max_target_capacity" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.resetMaxTargetCapacity"></a>

```python
def reset_max_target_capacity() -> None
```

##### `reset_minimum` <a name="reset_minimum" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.resetMinimum"></a>

```python
def reset_minimum() -> None
```

##### `reset_min_target_capacity` <a name="reset_min_target_capacity" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.resetMinTargetCapacity"></a>

```python
def reset_min_target_capacity() -> None
```

##### `reset_operator` <a name="reset_operator" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.resetOperator"></a>

```python
def reset_operator() -> None
```

##### `reset_period` <a name="reset_period" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.resetPeriod"></a>

```python
def reset_period() -> None
```

##### `reset_statistic` <a name="reset_statistic" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.resetStatistic"></a>

```python
def reset_statistic() -> None
```

##### `reset_target` <a name="reset_target" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.resetTarget"></a>

```python
def reset_target() -> None
```

##### `reset_unit` <a name="reset_unit" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.resetUnit"></a>

```python
def reset_unit() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.dimensions">dimensions</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsList">ElastigroupAzureScalingUpPolicyDimensionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.actionTypeInput">action_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.adjustmentInput">adjustment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.cooldownInput">cooldown_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.dimensionsInput">dimensions_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensions">ElastigroupAzureScalingUpPolicyDimensions</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.evaluationPeriodsInput">evaluation_periods_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.maximumInput">maximum_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.maxTargetCapacityInput">max_target_capacity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.metricNameInput">metric_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.minimumInput">minimum_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.minTargetCapacityInput">min_target_capacity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.operatorInput">operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.periodInput">period_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.policyNameInput">policy_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.statisticInput">statistic_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.targetInput">target_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.thresholdInput">threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.unitInput">unit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.actionType">action_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.adjustment">adjustment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.cooldown">cooldown</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.evaluationPeriods">evaluation_periods</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.maximum">maximum</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.maxTargetCapacity">max_target_capacity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.metricName">metric_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.minimum">minimum</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.minTargetCapacity">min_target_capacity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.period">period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.policyName">policy_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.statistic">statistic</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.target">target</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.threshold">threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.unit">unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicy">ElastigroupAzureScalingUpPolicy</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.dimensions"></a>

```python
dimensions: ElastigroupAzureScalingUpPolicyDimensionsList
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsList">ElastigroupAzureScalingUpPolicyDimensionsList</a>

---

##### `action_type_input`<sup>Optional</sup> <a name="action_type_input" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.actionTypeInput"></a>

```python
action_type_input: str
```

- *Type:* str

---

##### `adjustment_input`<sup>Optional</sup> <a name="adjustment_input" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.adjustmentInput"></a>

```python
adjustment_input: str
```

- *Type:* str

---

##### `cooldown_input`<sup>Optional</sup> <a name="cooldown_input" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.cooldownInput"></a>

```python
cooldown_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `dimensions_input`<sup>Optional</sup> <a name="dimensions_input" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.dimensionsInput"></a>

```python
dimensions_input: typing.Union[IResolvable, typing.List[ElastigroupAzureScalingUpPolicyDimensions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensions">ElastigroupAzureScalingUpPolicyDimensions</a>]]

---

##### `evaluation_periods_input`<sup>Optional</sup> <a name="evaluation_periods_input" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.evaluationPeriodsInput"></a>

```python
evaluation_periods_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `maximum_input`<sup>Optional</sup> <a name="maximum_input" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.maximumInput"></a>

```python
maximum_input: str
```

- *Type:* str

---

##### `max_target_capacity_input`<sup>Optional</sup> <a name="max_target_capacity_input" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.maxTargetCapacityInput"></a>

```python
max_target_capacity_input: str
```

- *Type:* str

---

##### `metric_name_input`<sup>Optional</sup> <a name="metric_name_input" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.metricNameInput"></a>

```python
metric_name_input: str
```

- *Type:* str

---

##### `minimum_input`<sup>Optional</sup> <a name="minimum_input" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.minimumInput"></a>

```python
minimum_input: str
```

- *Type:* str

---

##### `min_target_capacity_input`<sup>Optional</sup> <a name="min_target_capacity_input" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.minTargetCapacityInput"></a>

```python
min_target_capacity_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `operator_input`<sup>Optional</sup> <a name="operator_input" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.operatorInput"></a>

```python
operator_input: str
```

- *Type:* str

---

##### `period_input`<sup>Optional</sup> <a name="period_input" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.periodInput"></a>

```python
period_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `policy_name_input`<sup>Optional</sup> <a name="policy_name_input" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.policyNameInput"></a>

```python
policy_name_input: str
```

- *Type:* str

---

##### `statistic_input`<sup>Optional</sup> <a name="statistic_input" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.statisticInput"></a>

```python
statistic_input: str
```

- *Type:* str

---

##### `target_input`<sup>Optional</sup> <a name="target_input" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.targetInput"></a>

```python
target_input: str
```

- *Type:* str

---

##### `threshold_input`<sup>Optional</sup> <a name="threshold_input" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.thresholdInput"></a>

```python
threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `unit_input`<sup>Optional</sup> <a name="unit_input" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.unitInput"></a>

```python
unit_input: str
```

- *Type:* str

---

##### `action_type`<sup>Required</sup> <a name="action_type" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.actionType"></a>

```python
action_type: str
```

- *Type:* str

---

##### `adjustment`<sup>Required</sup> <a name="adjustment" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.adjustment"></a>

```python
adjustment: str
```

- *Type:* str

---

##### `cooldown`<sup>Required</sup> <a name="cooldown" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.cooldown"></a>

```python
cooldown: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `evaluation_periods`<sup>Required</sup> <a name="evaluation_periods" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.evaluationPeriods"></a>

```python
evaluation_periods: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `maximum`<sup>Required</sup> <a name="maximum" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.maximum"></a>

```python
maximum: str
```

- *Type:* str

---

##### `max_target_capacity`<sup>Required</sup> <a name="max_target_capacity" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.maxTargetCapacity"></a>

```python
max_target_capacity: str
```

- *Type:* str

---

##### `metric_name`<sup>Required</sup> <a name="metric_name" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.metricName"></a>

```python
metric_name: str
```

- *Type:* str

---

##### `minimum`<sup>Required</sup> <a name="minimum" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.minimum"></a>

```python
minimum: str
```

- *Type:* str

---

##### `min_target_capacity`<sup>Required</sup> <a name="min_target_capacity" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.minTargetCapacity"></a>

```python
min_target_capacity: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.period"></a>

```python
period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `policy_name`<sup>Required</sup> <a name="policy_name" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.policyName"></a>

```python
policy_name: str
```

- *Type:* str

---

##### `statistic`<sup>Required</sup> <a name="statistic" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.statistic"></a>

```python
statistic: str
```

- *Type:* str

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.target"></a>

```python
target: str
```

- *Type:* str

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.threshold"></a>

```python
threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.unit"></a>

```python
unit: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ElastigroupAzureScalingUpPolicy]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicy">ElastigroupAzureScalingUpPolicy</a>]

---


### ElastigroupAzureScheduledTaskList <a name="ElastigroupAzureScheduledTaskList" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_azure

elastigroupAzure.ElastigroupAzureScheduledTaskList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ElastigroupAzureScheduledTaskOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTask">ElastigroupAzureScheduledTask</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ElastigroupAzureScheduledTask]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTask">ElastigroupAzureScheduledTask</a>]]

---


### ElastigroupAzureScheduledTaskOutputReference <a name="ElastigroupAzureScheduledTaskOutputReference" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_azure

elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.resetAdjustment">reset_adjustment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.resetAdjustmentPercentage">reset_adjustment_percentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.resetBatchSizePercentage">reset_batch_size_percentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.resetGracePeriod">reset_grace_period</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.resetIsEnabled">reset_is_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.resetScaleMaxCapacity">reset_scale_max_capacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.resetScaleMinCapacity">reset_scale_min_capacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.resetScaleTargetCapacity">reset_scale_target_capacity</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_adjustment` <a name="reset_adjustment" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.resetAdjustment"></a>

```python
def reset_adjustment() -> None
```

##### `reset_adjustment_percentage` <a name="reset_adjustment_percentage" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.resetAdjustmentPercentage"></a>

```python
def reset_adjustment_percentage() -> None
```

##### `reset_batch_size_percentage` <a name="reset_batch_size_percentage" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.resetBatchSizePercentage"></a>

```python
def reset_batch_size_percentage() -> None
```

##### `reset_grace_period` <a name="reset_grace_period" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.resetGracePeriod"></a>

```python
def reset_grace_period() -> None
```

##### `reset_is_enabled` <a name="reset_is_enabled" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.resetIsEnabled"></a>

```python
def reset_is_enabled() -> None
```

##### `reset_scale_max_capacity` <a name="reset_scale_max_capacity" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.resetScaleMaxCapacity"></a>

```python
def reset_scale_max_capacity() -> None
```

##### `reset_scale_min_capacity` <a name="reset_scale_min_capacity" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.resetScaleMinCapacity"></a>

```python
def reset_scale_min_capacity() -> None
```

##### `reset_scale_target_capacity` <a name="reset_scale_target_capacity" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.resetScaleTargetCapacity"></a>

```python
def reset_scale_target_capacity() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.property.adjustmentInput">adjustment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.property.adjustmentPercentageInput">adjustment_percentage_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.property.batchSizePercentageInput">batch_size_percentage_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.property.cronExpressionInput">cron_expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.property.gracePeriodInput">grace_period_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.property.isEnabledInput">is_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.property.scaleMaxCapacityInput">scale_max_capacity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.property.scaleMinCapacityInput">scale_min_capacity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.property.scaleTargetCapacityInput">scale_target_capacity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.property.taskTypeInput">task_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.property.adjustment">adjustment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.property.adjustmentPercentage">adjustment_percentage</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.property.batchSizePercentage">batch_size_percentage</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.property.cronExpression">cron_expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.property.gracePeriod">grace_period</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.property.isEnabled">is_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.property.scaleMaxCapacity">scale_max_capacity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.property.scaleMinCapacity">scale_min_capacity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.property.scaleTargetCapacity">scale_target_capacity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.property.taskType">task_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTask">ElastigroupAzureScheduledTask</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `adjustment_input`<sup>Optional</sup> <a name="adjustment_input" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.property.adjustmentInput"></a>

```python
adjustment_input: str
```

- *Type:* str

---

##### `adjustment_percentage_input`<sup>Optional</sup> <a name="adjustment_percentage_input" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.property.adjustmentPercentageInput"></a>

```python
adjustment_percentage_input: str
```

- *Type:* str

---

##### `batch_size_percentage_input`<sup>Optional</sup> <a name="batch_size_percentage_input" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.property.batchSizePercentageInput"></a>

```python
batch_size_percentage_input: str
```

- *Type:* str

---

##### `cron_expression_input`<sup>Optional</sup> <a name="cron_expression_input" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.property.cronExpressionInput"></a>

```python
cron_expression_input: str
```

- *Type:* str

---

##### `grace_period_input`<sup>Optional</sup> <a name="grace_period_input" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.property.gracePeriodInput"></a>

```python
grace_period_input: str
```

- *Type:* str

---

##### `is_enabled_input`<sup>Optional</sup> <a name="is_enabled_input" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.property.isEnabledInput"></a>

```python
is_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `scale_max_capacity_input`<sup>Optional</sup> <a name="scale_max_capacity_input" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.property.scaleMaxCapacityInput"></a>

```python
scale_max_capacity_input: str
```

- *Type:* str

---

##### `scale_min_capacity_input`<sup>Optional</sup> <a name="scale_min_capacity_input" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.property.scaleMinCapacityInput"></a>

```python
scale_min_capacity_input: str
```

- *Type:* str

---

##### `scale_target_capacity_input`<sup>Optional</sup> <a name="scale_target_capacity_input" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.property.scaleTargetCapacityInput"></a>

```python
scale_target_capacity_input: str
```

- *Type:* str

---

##### `task_type_input`<sup>Optional</sup> <a name="task_type_input" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.property.taskTypeInput"></a>

```python
task_type_input: str
```

- *Type:* str

---

##### `adjustment`<sup>Required</sup> <a name="adjustment" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.property.adjustment"></a>

```python
adjustment: str
```

- *Type:* str

---

##### `adjustment_percentage`<sup>Required</sup> <a name="adjustment_percentage" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.property.adjustmentPercentage"></a>

```python
adjustment_percentage: str
```

- *Type:* str

---

##### `batch_size_percentage`<sup>Required</sup> <a name="batch_size_percentage" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.property.batchSizePercentage"></a>

```python
batch_size_percentage: str
```

- *Type:* str

---

##### `cron_expression`<sup>Required</sup> <a name="cron_expression" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.property.cronExpression"></a>

```python
cron_expression: str
```

- *Type:* str

---

##### `grace_period`<sup>Required</sup> <a name="grace_period" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.property.gracePeriod"></a>

```python
grace_period: str
```

- *Type:* str

---

##### `is_enabled`<sup>Required</sup> <a name="is_enabled" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.property.isEnabled"></a>

```python
is_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `scale_max_capacity`<sup>Required</sup> <a name="scale_max_capacity" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.property.scaleMaxCapacity"></a>

```python
scale_max_capacity: str
```

- *Type:* str

---

##### `scale_min_capacity`<sup>Required</sup> <a name="scale_min_capacity" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.property.scaleMinCapacity"></a>

```python
scale_min_capacity: str
```

- *Type:* str

---

##### `scale_target_capacity`<sup>Required</sup> <a name="scale_target_capacity" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.property.scaleTargetCapacity"></a>

```python
scale_target_capacity: str
```

- *Type:* str

---

##### `task_type`<sup>Required</sup> <a name="task_type" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.property.taskType"></a>

```python
task_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ElastigroupAzureScheduledTask]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTask">ElastigroupAzureScheduledTask</a>]

---


### ElastigroupAzureStrategyOutputReference <a name="ElastigroupAzureStrategyOutputReference" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_azure

elastigroupAzure.ElastigroupAzureStrategyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.resetDrainingTimeout">reset_draining_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.resetLowPriorityPercentage">reset_low_priority_percentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.resetOdCount">reset_od_count</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_draining_timeout` <a name="reset_draining_timeout" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.resetDrainingTimeout"></a>

```python
def reset_draining_timeout() -> None
```

##### `reset_low_priority_percentage` <a name="reset_low_priority_percentage" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.resetLowPriorityPercentage"></a>

```python
def reset_low_priority_percentage() -> None
```

##### `reset_od_count` <a name="reset_od_count" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.resetOdCount"></a>

```python
def reset_od_count() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.property.drainingTimeoutInput">draining_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.property.lowPriorityPercentageInput">low_priority_percentage_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.property.odCountInput">od_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.property.drainingTimeout">draining_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.property.lowPriorityPercentage">low_priority_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.property.odCount">od_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategy">ElastigroupAzureStrategy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `draining_timeout_input`<sup>Optional</sup> <a name="draining_timeout_input" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.property.drainingTimeoutInput"></a>

```python
draining_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `low_priority_percentage_input`<sup>Optional</sup> <a name="low_priority_percentage_input" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.property.lowPriorityPercentageInput"></a>

```python
low_priority_percentage_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `od_count_input`<sup>Optional</sup> <a name="od_count_input" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.property.odCountInput"></a>

```python
od_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `draining_timeout`<sup>Required</sup> <a name="draining_timeout" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.property.drainingTimeout"></a>

```python
draining_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `low_priority_percentage`<sup>Required</sup> <a name="low_priority_percentage" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.property.lowPriorityPercentage"></a>

```python
low_priority_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `od_count`<sup>Required</sup> <a name="od_count" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.property.odCount"></a>

```python
od_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.property.internalValue"></a>

```python
internal_value: ElastigroupAzureStrategy
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategy">ElastigroupAzureStrategy</a>

---


### ElastigroupAzureUpdatePolicyOutputReference <a name="ElastigroupAzureUpdatePolicyOutputReference" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_azure

elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.putRollConfig">put_roll_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.resetRollConfig">reset_roll_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_roll_config` <a name="put_roll_config" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.putRollConfig"></a>

```python
def put_roll_config(
  batch_size_percentage: typing.Union[int, float],
  grace_period: typing.Union[int, float] = None,
  health_check_type: str = None
) -> None
```

###### `batch_size_percentage`<sup>Required</sup> <a name="batch_size_percentage" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.putRollConfig.parameter.batchSizePercentage"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#batch_size_percentage ElastigroupAzure#batch_size_percentage}.

---

###### `grace_period`<sup>Optional</sup> <a name="grace_period" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.putRollConfig.parameter.gracePeriod"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#grace_period ElastigroupAzure#grace_period}.

---

###### `health_check_type`<sup>Optional</sup> <a name="health_check_type" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.putRollConfig.parameter.healthCheckType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#health_check_type ElastigroupAzure#health_check_type}.

---

##### `reset_roll_config` <a name="reset_roll_config" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.resetRollConfig"></a>

```python
def reset_roll_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.property.rollConfig">roll_config</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference">ElastigroupAzureUpdatePolicyRollConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.property.rollConfigInput">roll_config_input</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfig">ElastigroupAzureUpdatePolicyRollConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.property.shouldRollInput">should_roll_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.property.shouldRoll">should_roll</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicy">ElastigroupAzureUpdatePolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `roll_config`<sup>Required</sup> <a name="roll_config" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.property.rollConfig"></a>

```python
roll_config: ElastigroupAzureUpdatePolicyRollConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference">ElastigroupAzureUpdatePolicyRollConfigOutputReference</a>

---

##### `roll_config_input`<sup>Optional</sup> <a name="roll_config_input" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.property.rollConfigInput"></a>

```python
roll_config_input: ElastigroupAzureUpdatePolicyRollConfig
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfig">ElastigroupAzureUpdatePolicyRollConfig</a>

---

##### `should_roll_input`<sup>Optional</sup> <a name="should_roll_input" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.property.shouldRollInput"></a>

```python
should_roll_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `should_roll`<sup>Required</sup> <a name="should_roll" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.property.shouldRoll"></a>

```python
should_roll: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.property.internalValue"></a>

```python
internal_value: ElastigroupAzureUpdatePolicy
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicy">ElastigroupAzureUpdatePolicy</a>

---


### ElastigroupAzureUpdatePolicyRollConfigOutputReference <a name="ElastigroupAzureUpdatePolicyRollConfigOutputReference" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_azure

elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.resetGracePeriod">reset_grace_period</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.resetHealthCheckType">reset_health_check_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_grace_period` <a name="reset_grace_period" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.resetGracePeriod"></a>

```python
def reset_grace_period() -> None
```

##### `reset_health_check_type` <a name="reset_health_check_type" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.resetHealthCheckType"></a>

```python
def reset_health_check_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.property.batchSizePercentageInput">batch_size_percentage_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.property.gracePeriodInput">grace_period_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.property.healthCheckTypeInput">health_check_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.property.batchSizePercentage">batch_size_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.property.gracePeriod">grace_period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.property.healthCheckType">health_check_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfig">ElastigroupAzureUpdatePolicyRollConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `batch_size_percentage_input`<sup>Optional</sup> <a name="batch_size_percentage_input" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.property.batchSizePercentageInput"></a>

```python
batch_size_percentage_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `grace_period_input`<sup>Optional</sup> <a name="grace_period_input" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.property.gracePeriodInput"></a>

```python
grace_period_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `health_check_type_input`<sup>Optional</sup> <a name="health_check_type_input" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.property.healthCheckTypeInput"></a>

```python
health_check_type_input: str
```

- *Type:* str

---

##### `batch_size_percentage`<sup>Required</sup> <a name="batch_size_percentage" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.property.batchSizePercentage"></a>

```python
batch_size_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `grace_period`<sup>Required</sup> <a name="grace_period" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.property.gracePeriod"></a>

```python
grace_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `health_check_type`<sup>Required</sup> <a name="health_check_type" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.property.healthCheckType"></a>

```python
health_check_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.property.internalValue"></a>

```python
internal_value: ElastigroupAzureUpdatePolicyRollConfig
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfig">ElastigroupAzureUpdatePolicyRollConfig</a>

---



