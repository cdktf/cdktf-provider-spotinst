# `elastigroupAzure` Submodule <a name="`elastigroupAzure` Submodule" id="@cdktf/provider-spotinst.elastigroupAzure"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ElastigroupAzure <a name="ElastigroupAzure" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure"></a>

Represents a {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure spotinst_elastigroup_azure}.

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_azure.ElastigroupAzure;

ElastigroupAzure.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .lowPrioritySizes(java.util.List<java.lang.String>)
    .name(java.lang.String)
    .network(ElastigroupAzureNetwork)
    .odSizes(java.util.List<java.lang.String>)
    .product(java.lang.String)
    .region(java.lang.String)
    .resourceGroupName(java.lang.String)
    .strategy(ElastigroupAzureStrategy)
//  .customData(java.lang.String)
//  .desiredCapacity(java.lang.Number)
//  .healthCheck(ElastigroupAzureHealthCheck)
//  .id(java.lang.String)
//  .image(IResolvable)
//  .image(java.util.List<ElastigroupAzureImage>)
//  .integrationKubernetes(ElastigroupAzureIntegrationKubernetes)
//  .integrationMultaiRuntime(ElastigroupAzureIntegrationMultaiRuntime)
//  .loadBalancers(IResolvable)
//  .loadBalancers(java.util.List<ElastigroupAzureLoadBalancers>)
//  .login(ElastigroupAzureLogin)
//  .managedServiceIdentities(IResolvable)
//  .managedServiceIdentities(java.util.List<ElastigroupAzureManagedServiceIdentities>)
//  .maxSize(java.lang.Number)
//  .minSize(java.lang.Number)
//  .scalingDownPolicy(IResolvable)
//  .scalingDownPolicy(java.util.List<ElastigroupAzureScalingDownPolicy>)
//  .scalingUpPolicy(IResolvable)
//  .scalingUpPolicy(java.util.List<ElastigroupAzureScalingUpPolicy>)
//  .scheduledTask(IResolvable)
//  .scheduledTask(java.util.List<ElastigroupAzureScheduledTask>)
//  .shutdownScript(java.lang.String)
//  .updatePolicy(ElastigroupAzureUpdatePolicy)
//  .userData(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer.parameter.lowPrioritySizes">lowPrioritySizes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#low_priority_sizes ElastigroupAzure#low_priority_sizes}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#name ElastigroupAzure#name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer.parameter.network">network</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetwork">ElastigroupAzureNetwork</a></code> | network block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer.parameter.odSizes">odSizes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#od_sizes ElastigroupAzure#od_sizes}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer.parameter.product">product</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#product ElastigroupAzure#product}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#region ElastigroupAzure#region}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#resource_group_name ElastigroupAzure#resource_group_name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer.parameter.strategy">strategy</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategy">ElastigroupAzureStrategy</a></code> | strategy block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer.parameter.customData">customData</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#custom_data ElastigroupAzure#custom_data}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer.parameter.desiredCapacity">desiredCapacity</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#desired_capacity ElastigroupAzure#desired_capacity}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer.parameter.healthCheck">healthCheck</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheck">ElastigroupAzureHealthCheck</a></code> | health_check block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#id ElastigroupAzure#id}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer.parameter.image">image</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImage">ElastigroupAzureImage</a>></code> | image block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer.parameter.integrationKubernetes">integrationKubernetes</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetes">ElastigroupAzureIntegrationKubernetes</a></code> | integration_kubernetes block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer.parameter.integrationMultaiRuntime">integrationMultaiRuntime</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntime">ElastigroupAzureIntegrationMultaiRuntime</a></code> | integration_multai_runtime block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer.parameter.loadBalancers">loadBalancers</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancers">ElastigroupAzureLoadBalancers</a>></code> | load_balancers block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer.parameter.login">login</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLogin">ElastigroupAzureLogin</a></code> | login block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer.parameter.managedServiceIdentities">managedServiceIdentities</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentities">ElastigroupAzureManagedServiceIdentities</a>></code> | managed_service_identities block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer.parameter.maxSize">maxSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#max_size ElastigroupAzure#max_size}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer.parameter.minSize">minSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#min_size ElastigroupAzure#min_size}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer.parameter.scalingDownPolicy">scalingDownPolicy</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicy">ElastigroupAzureScalingDownPolicy</a>></code> | scaling_down_policy block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer.parameter.scalingUpPolicy">scalingUpPolicy</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicy">ElastigroupAzureScalingUpPolicy</a>></code> | scaling_up_policy block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer.parameter.scheduledTask">scheduledTask</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTask">ElastigroupAzureScheduledTask</a>></code> | scheduled_task block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer.parameter.shutdownScript">shutdownScript</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#shutdown_script ElastigroupAzure#shutdown_script}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer.parameter.updatePolicy">updatePolicy</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicy">ElastigroupAzureUpdatePolicy</a></code> | update_policy block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer.parameter.userData">userData</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#user_data ElastigroupAzure#user_data}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `lowPrioritySizes`<sup>Required</sup> <a name="lowPrioritySizes" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer.parameter.lowPrioritySizes"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#low_priority_sizes ElastigroupAzure#low_priority_sizes}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#name ElastigroupAzure#name}.

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer.parameter.network"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetwork">ElastigroupAzureNetwork</a>

network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#network ElastigroupAzure#network}

---

##### `odSizes`<sup>Required</sup> <a name="odSizes" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer.parameter.odSizes"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#od_sizes ElastigroupAzure#od_sizes}.

---

##### `product`<sup>Required</sup> <a name="product" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer.parameter.product"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#product ElastigroupAzure#product}.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#region ElastigroupAzure#region}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#resource_group_name ElastigroupAzure#resource_group_name}.

---

##### `strategy`<sup>Required</sup> <a name="strategy" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer.parameter.strategy"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategy">ElastigroupAzureStrategy</a>

strategy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#strategy ElastigroupAzure#strategy}

---

##### `customData`<sup>Optional</sup> <a name="customData" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer.parameter.customData"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#custom_data ElastigroupAzure#custom_data}.

---

##### `desiredCapacity`<sup>Optional</sup> <a name="desiredCapacity" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer.parameter.desiredCapacity"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#desired_capacity ElastigroupAzure#desired_capacity}.

---

##### `healthCheck`<sup>Optional</sup> <a name="healthCheck" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer.parameter.healthCheck"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheck">ElastigroupAzureHealthCheck</a>

health_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#health_check ElastigroupAzure#health_check}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#id ElastigroupAzure#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `image`<sup>Optional</sup> <a name="image" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer.parameter.image"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImage">ElastigroupAzureImage</a>>

image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#image ElastigroupAzure#image}

---

##### `integrationKubernetes`<sup>Optional</sup> <a name="integrationKubernetes" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer.parameter.integrationKubernetes"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetes">ElastigroupAzureIntegrationKubernetes</a>

integration_kubernetes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#integration_kubernetes ElastigroupAzure#integration_kubernetes}

---

##### `integrationMultaiRuntime`<sup>Optional</sup> <a name="integrationMultaiRuntime" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer.parameter.integrationMultaiRuntime"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntime">ElastigroupAzureIntegrationMultaiRuntime</a>

integration_multai_runtime block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#integration_multai_runtime ElastigroupAzure#integration_multai_runtime}

---

##### `loadBalancers`<sup>Optional</sup> <a name="loadBalancers" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer.parameter.loadBalancers"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancers">ElastigroupAzureLoadBalancers</a>>

load_balancers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#load_balancers ElastigroupAzure#load_balancers}

---

##### `login`<sup>Optional</sup> <a name="login" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer.parameter.login"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLogin">ElastigroupAzureLogin</a>

login block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#login ElastigroupAzure#login}

---

##### `managedServiceIdentities`<sup>Optional</sup> <a name="managedServiceIdentities" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer.parameter.managedServiceIdentities"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentities">ElastigroupAzureManagedServiceIdentities</a>>

managed_service_identities block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#managed_service_identities ElastigroupAzure#managed_service_identities}

---

##### `maxSize`<sup>Optional</sup> <a name="maxSize" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer.parameter.maxSize"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#max_size ElastigroupAzure#max_size}.

---

##### `minSize`<sup>Optional</sup> <a name="minSize" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer.parameter.minSize"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#min_size ElastigroupAzure#min_size}.

---

##### `scalingDownPolicy`<sup>Optional</sup> <a name="scalingDownPolicy" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer.parameter.scalingDownPolicy"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicy">ElastigroupAzureScalingDownPolicy</a>>

scaling_down_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#scaling_down_policy ElastigroupAzure#scaling_down_policy}

---

##### `scalingUpPolicy`<sup>Optional</sup> <a name="scalingUpPolicy" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer.parameter.scalingUpPolicy"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicy">ElastigroupAzureScalingUpPolicy</a>>

scaling_up_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#scaling_up_policy ElastigroupAzure#scaling_up_policy}

---

##### `scheduledTask`<sup>Optional</sup> <a name="scheduledTask" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer.parameter.scheduledTask"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTask">ElastigroupAzureScheduledTask</a>>

scheduled_task block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#scheduled_task ElastigroupAzure#scheduled_task}

---

##### `shutdownScript`<sup>Optional</sup> <a name="shutdownScript" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer.parameter.shutdownScript"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#shutdown_script ElastigroupAzure#shutdown_script}.

---

##### `updatePolicy`<sup>Optional</sup> <a name="updatePolicy" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer.parameter.updatePolicy"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicy">ElastigroupAzureUpdatePolicy</a>

update_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#update_policy ElastigroupAzure#update_policy}

---

##### `userData`<sup>Optional</sup> <a name="userData" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer.parameter.userData"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#user_data ElastigroupAzure#user_data}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.putHealthCheck">putHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.putImage">putImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.putIntegrationKubernetes">putIntegrationKubernetes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.putIntegrationMultaiRuntime">putIntegrationMultaiRuntime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.putLoadBalancers">putLoadBalancers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.putLogin">putLogin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.putManagedServiceIdentities">putManagedServiceIdentities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.putNetwork">putNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.putScalingDownPolicy">putScalingDownPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.putScalingUpPolicy">putScalingUpPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.putScheduledTask">putScheduledTask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.putStrategy">putStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.putUpdatePolicy">putUpdatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.resetCustomData">resetCustomData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.resetDesiredCapacity">resetDesiredCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.resetHealthCheck">resetHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.resetImage">resetImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.resetIntegrationKubernetes">resetIntegrationKubernetes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.resetIntegrationMultaiRuntime">resetIntegrationMultaiRuntime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.resetLoadBalancers">resetLoadBalancers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.resetLogin">resetLogin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.resetManagedServiceIdentities">resetManagedServiceIdentities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.resetMaxSize">resetMaxSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.resetMinSize">resetMinSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.resetScalingDownPolicy">resetScalingDownPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.resetScalingUpPolicy">resetScalingUpPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.resetScheduledTask">resetScheduledTask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.resetShutdownScript">resetShutdownScript</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.resetUpdatePolicy">resetUpdatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.resetUserData">resetUserData</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putHealthCheck` <a name="putHealthCheck" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.putHealthCheck"></a>

```java
public void putHealthCheck(ElastigroupAzureHealthCheck value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.putHealthCheck.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheck">ElastigroupAzureHealthCheck</a>

---

##### `putImage` <a name="putImage" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.putImage"></a>

```java
public void putImage(IResolvable OR java.util.List<ElastigroupAzureImage> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.putImage.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImage">ElastigroupAzureImage</a>>

---

##### `putIntegrationKubernetes` <a name="putIntegrationKubernetes" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.putIntegrationKubernetes"></a>

```java
public void putIntegrationKubernetes(ElastigroupAzureIntegrationKubernetes value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.putIntegrationKubernetes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetes">ElastigroupAzureIntegrationKubernetes</a>

---

##### `putIntegrationMultaiRuntime` <a name="putIntegrationMultaiRuntime" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.putIntegrationMultaiRuntime"></a>

```java
public void putIntegrationMultaiRuntime(ElastigroupAzureIntegrationMultaiRuntime value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.putIntegrationMultaiRuntime.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntime">ElastigroupAzureIntegrationMultaiRuntime</a>

---

##### `putLoadBalancers` <a name="putLoadBalancers" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.putLoadBalancers"></a>

```java
public void putLoadBalancers(IResolvable OR java.util.List<ElastigroupAzureLoadBalancers> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.putLoadBalancers.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancers">ElastigroupAzureLoadBalancers</a>>

---

##### `putLogin` <a name="putLogin" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.putLogin"></a>

```java
public void putLogin(ElastigroupAzureLogin value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.putLogin.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLogin">ElastigroupAzureLogin</a>

---

##### `putManagedServiceIdentities` <a name="putManagedServiceIdentities" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.putManagedServiceIdentities"></a>

```java
public void putManagedServiceIdentities(IResolvable OR java.util.List<ElastigroupAzureManagedServiceIdentities> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.putManagedServiceIdentities.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentities">ElastigroupAzureManagedServiceIdentities</a>>

---

##### `putNetwork` <a name="putNetwork" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.putNetwork"></a>

```java
public void putNetwork(ElastigroupAzureNetwork value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.putNetwork.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetwork">ElastigroupAzureNetwork</a>

---

##### `putScalingDownPolicy` <a name="putScalingDownPolicy" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.putScalingDownPolicy"></a>

```java
public void putScalingDownPolicy(IResolvable OR java.util.List<ElastigroupAzureScalingDownPolicy> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.putScalingDownPolicy.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicy">ElastigroupAzureScalingDownPolicy</a>>

---

##### `putScalingUpPolicy` <a name="putScalingUpPolicy" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.putScalingUpPolicy"></a>

```java
public void putScalingUpPolicy(IResolvable OR java.util.List<ElastigroupAzureScalingUpPolicy> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.putScalingUpPolicy.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicy">ElastigroupAzureScalingUpPolicy</a>>

---

##### `putScheduledTask` <a name="putScheduledTask" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.putScheduledTask"></a>

```java
public void putScheduledTask(IResolvable OR java.util.List<ElastigroupAzureScheduledTask> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.putScheduledTask.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTask">ElastigroupAzureScheduledTask</a>>

---

##### `putStrategy` <a name="putStrategy" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.putStrategy"></a>

```java
public void putStrategy(ElastigroupAzureStrategy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.putStrategy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategy">ElastigroupAzureStrategy</a>

---

##### `putUpdatePolicy` <a name="putUpdatePolicy" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.putUpdatePolicy"></a>

```java
public void putUpdatePolicy(ElastigroupAzureUpdatePolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.putUpdatePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicy">ElastigroupAzureUpdatePolicy</a>

---

##### `resetCustomData` <a name="resetCustomData" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.resetCustomData"></a>

```java
public void resetCustomData()
```

##### `resetDesiredCapacity` <a name="resetDesiredCapacity" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.resetDesiredCapacity"></a>

```java
public void resetDesiredCapacity()
```

##### `resetHealthCheck` <a name="resetHealthCheck" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.resetHealthCheck"></a>

```java
public void resetHealthCheck()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.resetId"></a>

```java
public void resetId()
```

##### `resetImage` <a name="resetImage" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.resetImage"></a>

```java
public void resetImage()
```

##### `resetIntegrationKubernetes` <a name="resetIntegrationKubernetes" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.resetIntegrationKubernetes"></a>

```java
public void resetIntegrationKubernetes()
```

##### `resetIntegrationMultaiRuntime` <a name="resetIntegrationMultaiRuntime" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.resetIntegrationMultaiRuntime"></a>

```java
public void resetIntegrationMultaiRuntime()
```

##### `resetLoadBalancers` <a name="resetLoadBalancers" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.resetLoadBalancers"></a>

```java
public void resetLoadBalancers()
```

##### `resetLogin` <a name="resetLogin" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.resetLogin"></a>

```java
public void resetLogin()
```

##### `resetManagedServiceIdentities` <a name="resetManagedServiceIdentities" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.resetManagedServiceIdentities"></a>

```java
public void resetManagedServiceIdentities()
```

##### `resetMaxSize` <a name="resetMaxSize" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.resetMaxSize"></a>

```java
public void resetMaxSize()
```

##### `resetMinSize` <a name="resetMinSize" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.resetMinSize"></a>

```java
public void resetMinSize()
```

##### `resetScalingDownPolicy` <a name="resetScalingDownPolicy" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.resetScalingDownPolicy"></a>

```java
public void resetScalingDownPolicy()
```

##### `resetScalingUpPolicy` <a name="resetScalingUpPolicy" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.resetScalingUpPolicy"></a>

```java
public void resetScalingUpPolicy()
```

##### `resetScheduledTask` <a name="resetScheduledTask" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.resetScheduledTask"></a>

```java
public void resetScheduledTask()
```

##### `resetShutdownScript` <a name="resetShutdownScript" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.resetShutdownScript"></a>

```java
public void resetShutdownScript()
```

##### `resetUpdatePolicy` <a name="resetUpdatePolicy" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.resetUpdatePolicy"></a>

```java
public void resetUpdatePolicy()
```

##### `resetUserData` <a name="resetUserData" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.resetUserData"></a>

```java
public void resetUserData()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ElastigroupAzure resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_azure.ElastigroupAzure;

ElastigroupAzure.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_azure.ElastigroupAzure;

ElastigroupAzure.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_azure.ElastigroupAzure;

ElastigroupAzure.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_azure.ElastigroupAzure;

ElastigroupAzure.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ElastigroupAzure.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ElastigroupAzure resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ElastigroupAzure to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ElastigroupAzure that should be imported.

Refer to the {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ElastigroupAzure to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.healthCheck">healthCheck</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference">ElastigroupAzureHealthCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.image">image</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageList">ElastigroupAzureImageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.integrationKubernetes">integrationKubernetes</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference">ElastigroupAzureIntegrationKubernetesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.integrationMultaiRuntime">integrationMultaiRuntime</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference">ElastigroupAzureIntegrationMultaiRuntimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.loadBalancers">loadBalancers</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersList">ElastigroupAzureLoadBalancersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.login">login</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference">ElastigroupAzureLoginOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.managedServiceIdentities">managedServiceIdentities</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesList">ElastigroupAzureManagedServiceIdentitiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.network">network</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference">ElastigroupAzureNetworkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.scalingDownPolicy">scalingDownPolicy</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyList">ElastigroupAzureScalingDownPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.scalingUpPolicy">scalingUpPolicy</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyList">ElastigroupAzureScalingUpPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.scheduledTask">scheduledTask</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskList">ElastigroupAzureScheduledTaskList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.strategy">strategy</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference">ElastigroupAzureStrategyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.updatePolicy">updatePolicy</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference">ElastigroupAzureUpdatePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.customDataInput">customDataInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.desiredCapacityInput">desiredCapacityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.healthCheckInput">healthCheckInput</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheck">ElastigroupAzureHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.imageInput">imageInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImage">ElastigroupAzureImage</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.integrationKubernetesInput">integrationKubernetesInput</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetes">ElastigroupAzureIntegrationKubernetes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.integrationMultaiRuntimeInput">integrationMultaiRuntimeInput</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntime">ElastigroupAzureIntegrationMultaiRuntime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.loadBalancersInput">loadBalancersInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancers">ElastigroupAzureLoadBalancers</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.loginInput">loginInput</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLogin">ElastigroupAzureLogin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.lowPrioritySizesInput">lowPrioritySizesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.managedServiceIdentitiesInput">managedServiceIdentitiesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentities">ElastigroupAzureManagedServiceIdentities</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.maxSizeInput">maxSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.minSizeInput">minSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.networkInput">networkInput</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetwork">ElastigroupAzureNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.odSizesInput">odSizesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.productInput">productInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.scalingDownPolicyInput">scalingDownPolicyInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicy">ElastigroupAzureScalingDownPolicy</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.scalingUpPolicyInput">scalingUpPolicyInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicy">ElastigroupAzureScalingUpPolicy</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.scheduledTaskInput">scheduledTaskInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTask">ElastigroupAzureScheduledTask</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.shutdownScriptInput">shutdownScriptInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.strategyInput">strategyInput</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategy">ElastigroupAzureStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.updatePolicyInput">updatePolicyInput</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicy">ElastigroupAzureUpdatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.userDataInput">userDataInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.customData">customData</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.desiredCapacity">desiredCapacity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.lowPrioritySizes">lowPrioritySizes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.maxSize">maxSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.minSize">minSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.odSizes">odSizes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.product">product</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.shutdownScript">shutdownScript</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.userData">userData</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `healthCheck`<sup>Required</sup> <a name="healthCheck" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.healthCheck"></a>

```java
public ElastigroupAzureHealthCheckOutputReference getHealthCheck();
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference">ElastigroupAzureHealthCheckOutputReference</a>

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.image"></a>

```java
public ElastigroupAzureImageList getImage();
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageList">ElastigroupAzureImageList</a>

---

##### `integrationKubernetes`<sup>Required</sup> <a name="integrationKubernetes" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.integrationKubernetes"></a>

```java
public ElastigroupAzureIntegrationKubernetesOutputReference getIntegrationKubernetes();
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference">ElastigroupAzureIntegrationKubernetesOutputReference</a>

---

##### `integrationMultaiRuntime`<sup>Required</sup> <a name="integrationMultaiRuntime" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.integrationMultaiRuntime"></a>

```java
public ElastigroupAzureIntegrationMultaiRuntimeOutputReference getIntegrationMultaiRuntime();
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference">ElastigroupAzureIntegrationMultaiRuntimeOutputReference</a>

---

##### `loadBalancers`<sup>Required</sup> <a name="loadBalancers" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.loadBalancers"></a>

```java
public ElastigroupAzureLoadBalancersList getLoadBalancers();
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersList">ElastigroupAzureLoadBalancersList</a>

---

##### `login`<sup>Required</sup> <a name="login" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.login"></a>

```java
public ElastigroupAzureLoginOutputReference getLogin();
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference">ElastigroupAzureLoginOutputReference</a>

---

##### `managedServiceIdentities`<sup>Required</sup> <a name="managedServiceIdentities" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.managedServiceIdentities"></a>

```java
public ElastigroupAzureManagedServiceIdentitiesList getManagedServiceIdentities();
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesList">ElastigroupAzureManagedServiceIdentitiesList</a>

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.network"></a>

```java
public ElastigroupAzureNetworkOutputReference getNetwork();
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference">ElastigroupAzureNetworkOutputReference</a>

---

##### `scalingDownPolicy`<sup>Required</sup> <a name="scalingDownPolicy" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.scalingDownPolicy"></a>

```java
public ElastigroupAzureScalingDownPolicyList getScalingDownPolicy();
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyList">ElastigroupAzureScalingDownPolicyList</a>

---

##### `scalingUpPolicy`<sup>Required</sup> <a name="scalingUpPolicy" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.scalingUpPolicy"></a>

```java
public ElastigroupAzureScalingUpPolicyList getScalingUpPolicy();
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyList">ElastigroupAzureScalingUpPolicyList</a>

---

##### `scheduledTask`<sup>Required</sup> <a name="scheduledTask" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.scheduledTask"></a>

```java
public ElastigroupAzureScheduledTaskList getScheduledTask();
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskList">ElastigroupAzureScheduledTaskList</a>

---

##### `strategy`<sup>Required</sup> <a name="strategy" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.strategy"></a>

```java
public ElastigroupAzureStrategyOutputReference getStrategy();
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference">ElastigroupAzureStrategyOutputReference</a>

---

##### `updatePolicy`<sup>Required</sup> <a name="updatePolicy" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.updatePolicy"></a>

```java
public ElastigroupAzureUpdatePolicyOutputReference getUpdatePolicy();
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference">ElastigroupAzureUpdatePolicyOutputReference</a>

---

##### `customDataInput`<sup>Optional</sup> <a name="customDataInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.customDataInput"></a>

```java
public java.lang.String getCustomDataInput();
```

- *Type:* java.lang.String

---

##### `desiredCapacityInput`<sup>Optional</sup> <a name="desiredCapacityInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.desiredCapacityInput"></a>

```java
public java.lang.Number getDesiredCapacityInput();
```

- *Type:* java.lang.Number

---

##### `healthCheckInput`<sup>Optional</sup> <a name="healthCheckInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.healthCheckInput"></a>

```java
public ElastigroupAzureHealthCheck getHealthCheckInput();
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheck">ElastigroupAzureHealthCheck</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `imageInput`<sup>Optional</sup> <a name="imageInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.imageInput"></a>

```java
public java.lang.Object getImageInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImage">ElastigroupAzureImage</a>>

---

##### `integrationKubernetesInput`<sup>Optional</sup> <a name="integrationKubernetesInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.integrationKubernetesInput"></a>

```java
public ElastigroupAzureIntegrationKubernetes getIntegrationKubernetesInput();
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetes">ElastigroupAzureIntegrationKubernetes</a>

---

##### `integrationMultaiRuntimeInput`<sup>Optional</sup> <a name="integrationMultaiRuntimeInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.integrationMultaiRuntimeInput"></a>

```java
public ElastigroupAzureIntegrationMultaiRuntime getIntegrationMultaiRuntimeInput();
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntime">ElastigroupAzureIntegrationMultaiRuntime</a>

---

##### `loadBalancersInput`<sup>Optional</sup> <a name="loadBalancersInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.loadBalancersInput"></a>

```java
public java.lang.Object getLoadBalancersInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancers">ElastigroupAzureLoadBalancers</a>>

---

##### `loginInput`<sup>Optional</sup> <a name="loginInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.loginInput"></a>

```java
public ElastigroupAzureLogin getLoginInput();
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLogin">ElastigroupAzureLogin</a>

---

##### `lowPrioritySizesInput`<sup>Optional</sup> <a name="lowPrioritySizesInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.lowPrioritySizesInput"></a>

```java
public java.util.List<java.lang.String> getLowPrioritySizesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `managedServiceIdentitiesInput`<sup>Optional</sup> <a name="managedServiceIdentitiesInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.managedServiceIdentitiesInput"></a>

```java
public java.lang.Object getManagedServiceIdentitiesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentities">ElastigroupAzureManagedServiceIdentities</a>>

---

##### `maxSizeInput`<sup>Optional</sup> <a name="maxSizeInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.maxSizeInput"></a>

```java
public java.lang.Number getMaxSizeInput();
```

- *Type:* java.lang.Number

---

##### `minSizeInput`<sup>Optional</sup> <a name="minSizeInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.minSizeInput"></a>

```java
public java.lang.Number getMinSizeInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.networkInput"></a>

```java
public ElastigroupAzureNetwork getNetworkInput();
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetwork">ElastigroupAzureNetwork</a>

---

##### `odSizesInput`<sup>Optional</sup> <a name="odSizesInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.odSizesInput"></a>

```java
public java.util.List<java.lang.String> getOdSizesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `productInput`<sup>Optional</sup> <a name="productInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.productInput"></a>

```java
public java.lang.String getProductInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `scalingDownPolicyInput`<sup>Optional</sup> <a name="scalingDownPolicyInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.scalingDownPolicyInput"></a>

```java
public java.lang.Object getScalingDownPolicyInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicy">ElastigroupAzureScalingDownPolicy</a>>

---

##### `scalingUpPolicyInput`<sup>Optional</sup> <a name="scalingUpPolicyInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.scalingUpPolicyInput"></a>

```java
public java.lang.Object getScalingUpPolicyInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicy">ElastigroupAzureScalingUpPolicy</a>>

---

##### `scheduledTaskInput`<sup>Optional</sup> <a name="scheduledTaskInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.scheduledTaskInput"></a>

```java
public java.lang.Object getScheduledTaskInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTask">ElastigroupAzureScheduledTask</a>>

---

##### `shutdownScriptInput`<sup>Optional</sup> <a name="shutdownScriptInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.shutdownScriptInput"></a>

```java
public java.lang.String getShutdownScriptInput();
```

- *Type:* java.lang.String

---

##### `strategyInput`<sup>Optional</sup> <a name="strategyInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.strategyInput"></a>

```java
public ElastigroupAzureStrategy getStrategyInput();
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategy">ElastigroupAzureStrategy</a>

---

##### `updatePolicyInput`<sup>Optional</sup> <a name="updatePolicyInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.updatePolicyInput"></a>

```java
public ElastigroupAzureUpdatePolicy getUpdatePolicyInput();
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicy">ElastigroupAzureUpdatePolicy</a>

---

##### `userDataInput`<sup>Optional</sup> <a name="userDataInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.userDataInput"></a>

```java
public java.lang.String getUserDataInput();
```

- *Type:* java.lang.String

---

##### `customData`<sup>Required</sup> <a name="customData" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.customData"></a>

```java
public java.lang.String getCustomData();
```

- *Type:* java.lang.String

---

##### `desiredCapacity`<sup>Required</sup> <a name="desiredCapacity" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.desiredCapacity"></a>

```java
public java.lang.Number getDesiredCapacity();
```

- *Type:* java.lang.Number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lowPrioritySizes`<sup>Required</sup> <a name="lowPrioritySizes" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.lowPrioritySizes"></a>

```java
public java.util.List<java.lang.String> getLowPrioritySizes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `maxSize`<sup>Required</sup> <a name="maxSize" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.maxSize"></a>

```java
public java.lang.Number getMaxSize();
```

- *Type:* java.lang.Number

---

##### `minSize`<sup>Required</sup> <a name="minSize" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.minSize"></a>

```java
public java.lang.Number getMinSize();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `odSizes`<sup>Required</sup> <a name="odSizes" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.odSizes"></a>

```java
public java.util.List<java.lang.String> getOdSizes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `product`<sup>Required</sup> <a name="product" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.product"></a>

```java
public java.lang.String getProduct();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `shutdownScript`<sup>Required</sup> <a name="shutdownScript" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.shutdownScript"></a>

```java
public java.lang.String getShutdownScript();
```

- *Type:* java.lang.String

---

##### `userData`<sup>Required</sup> <a name="userData" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.userData"></a>

```java
public java.lang.String getUserData();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ElastigroupAzureConfig <a name="ElastigroupAzureConfig" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_azure.ElastigroupAzureConfig;

ElastigroupAzureConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .lowPrioritySizes(java.util.List<java.lang.String>)
    .name(java.lang.String)
    .network(ElastigroupAzureNetwork)
    .odSizes(java.util.List<java.lang.String>)
    .product(java.lang.String)
    .region(java.lang.String)
    .resourceGroupName(java.lang.String)
    .strategy(ElastigroupAzureStrategy)
//  .customData(java.lang.String)
//  .desiredCapacity(java.lang.Number)
//  .healthCheck(ElastigroupAzureHealthCheck)
//  .id(java.lang.String)
//  .image(IResolvable)
//  .image(java.util.List<ElastigroupAzureImage>)
//  .integrationKubernetes(ElastigroupAzureIntegrationKubernetes)
//  .integrationMultaiRuntime(ElastigroupAzureIntegrationMultaiRuntime)
//  .loadBalancers(IResolvable)
//  .loadBalancers(java.util.List<ElastigroupAzureLoadBalancers>)
//  .login(ElastigroupAzureLogin)
//  .managedServiceIdentities(IResolvable)
//  .managedServiceIdentities(java.util.List<ElastigroupAzureManagedServiceIdentities>)
//  .maxSize(java.lang.Number)
//  .minSize(java.lang.Number)
//  .scalingDownPolicy(IResolvable)
//  .scalingDownPolicy(java.util.List<ElastigroupAzureScalingDownPolicy>)
//  .scalingUpPolicy(IResolvable)
//  .scalingUpPolicy(java.util.List<ElastigroupAzureScalingUpPolicy>)
//  .scheduledTask(IResolvable)
//  .scheduledTask(java.util.List<ElastigroupAzureScheduledTask>)
//  .shutdownScript(java.lang.String)
//  .updatePolicy(ElastigroupAzureUpdatePolicy)
//  .userData(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.lowPrioritySizes">lowPrioritySizes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#low_priority_sizes ElastigroupAzure#low_priority_sizes}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#name ElastigroupAzure#name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.network">network</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetwork">ElastigroupAzureNetwork</a></code> | network block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.odSizes">odSizes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#od_sizes ElastigroupAzure#od_sizes}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.product">product</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#product ElastigroupAzure#product}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#region ElastigroupAzure#region}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#resource_group_name ElastigroupAzure#resource_group_name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.strategy">strategy</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategy">ElastigroupAzureStrategy</a></code> | strategy block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.customData">customData</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#custom_data ElastigroupAzure#custom_data}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.desiredCapacity">desiredCapacity</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#desired_capacity ElastigroupAzure#desired_capacity}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.healthCheck">healthCheck</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheck">ElastigroupAzureHealthCheck</a></code> | health_check block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#id ElastigroupAzure#id}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.image">image</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImage">ElastigroupAzureImage</a>></code> | image block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.integrationKubernetes">integrationKubernetes</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetes">ElastigroupAzureIntegrationKubernetes</a></code> | integration_kubernetes block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.integrationMultaiRuntime">integrationMultaiRuntime</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntime">ElastigroupAzureIntegrationMultaiRuntime</a></code> | integration_multai_runtime block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.loadBalancers">loadBalancers</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancers">ElastigroupAzureLoadBalancers</a>></code> | load_balancers block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.login">login</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLogin">ElastigroupAzureLogin</a></code> | login block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.managedServiceIdentities">managedServiceIdentities</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentities">ElastigroupAzureManagedServiceIdentities</a>></code> | managed_service_identities block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.maxSize">maxSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#max_size ElastigroupAzure#max_size}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.minSize">minSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#min_size ElastigroupAzure#min_size}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.scalingDownPolicy">scalingDownPolicy</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicy">ElastigroupAzureScalingDownPolicy</a>></code> | scaling_down_policy block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.scalingUpPolicy">scalingUpPolicy</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicy">ElastigroupAzureScalingUpPolicy</a>></code> | scaling_up_policy block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.scheduledTask">scheduledTask</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTask">ElastigroupAzureScheduledTask</a>></code> | scheduled_task block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.shutdownScript">shutdownScript</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#shutdown_script ElastigroupAzure#shutdown_script}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.updatePolicy">updatePolicy</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicy">ElastigroupAzureUpdatePolicy</a></code> | update_policy block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.userData">userData</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#user_data ElastigroupAzure#user_data}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `lowPrioritySizes`<sup>Required</sup> <a name="lowPrioritySizes" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.lowPrioritySizes"></a>

```java
public java.util.List<java.lang.String> getLowPrioritySizes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#low_priority_sizes ElastigroupAzure#low_priority_sizes}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#name ElastigroupAzure#name}.

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.network"></a>

```java
public ElastigroupAzureNetwork getNetwork();
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetwork">ElastigroupAzureNetwork</a>

network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#network ElastigroupAzure#network}

---

##### `odSizes`<sup>Required</sup> <a name="odSizes" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.odSizes"></a>

```java
public java.util.List<java.lang.String> getOdSizes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#od_sizes ElastigroupAzure#od_sizes}.

---

##### `product`<sup>Required</sup> <a name="product" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.product"></a>

```java
public java.lang.String getProduct();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#product ElastigroupAzure#product}.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#region ElastigroupAzure#region}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#resource_group_name ElastigroupAzure#resource_group_name}.

---

##### `strategy`<sup>Required</sup> <a name="strategy" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.strategy"></a>

```java
public ElastigroupAzureStrategy getStrategy();
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategy">ElastigroupAzureStrategy</a>

strategy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#strategy ElastigroupAzure#strategy}

---

##### `customData`<sup>Optional</sup> <a name="customData" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.customData"></a>

```java
public java.lang.String getCustomData();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#custom_data ElastigroupAzure#custom_data}.

---

##### `desiredCapacity`<sup>Optional</sup> <a name="desiredCapacity" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.desiredCapacity"></a>

```java
public java.lang.Number getDesiredCapacity();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#desired_capacity ElastigroupAzure#desired_capacity}.

---

##### `healthCheck`<sup>Optional</sup> <a name="healthCheck" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.healthCheck"></a>

```java
public ElastigroupAzureHealthCheck getHealthCheck();
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheck">ElastigroupAzureHealthCheck</a>

health_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#health_check ElastigroupAzure#health_check}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#id ElastigroupAzure#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `image`<sup>Optional</sup> <a name="image" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.image"></a>

```java
public java.lang.Object getImage();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImage">ElastigroupAzureImage</a>>

image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#image ElastigroupAzure#image}

---

##### `integrationKubernetes`<sup>Optional</sup> <a name="integrationKubernetes" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.integrationKubernetes"></a>

```java
public ElastigroupAzureIntegrationKubernetes getIntegrationKubernetes();
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetes">ElastigroupAzureIntegrationKubernetes</a>

integration_kubernetes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#integration_kubernetes ElastigroupAzure#integration_kubernetes}

---

##### `integrationMultaiRuntime`<sup>Optional</sup> <a name="integrationMultaiRuntime" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.integrationMultaiRuntime"></a>

```java
public ElastigroupAzureIntegrationMultaiRuntime getIntegrationMultaiRuntime();
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntime">ElastigroupAzureIntegrationMultaiRuntime</a>

integration_multai_runtime block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#integration_multai_runtime ElastigroupAzure#integration_multai_runtime}

---

##### `loadBalancers`<sup>Optional</sup> <a name="loadBalancers" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.loadBalancers"></a>

```java
public java.lang.Object getLoadBalancers();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancers">ElastigroupAzureLoadBalancers</a>>

load_balancers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#load_balancers ElastigroupAzure#load_balancers}

---

##### `login`<sup>Optional</sup> <a name="login" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.login"></a>

```java
public ElastigroupAzureLogin getLogin();
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLogin">ElastigroupAzureLogin</a>

login block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#login ElastigroupAzure#login}

---

##### `managedServiceIdentities`<sup>Optional</sup> <a name="managedServiceIdentities" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.managedServiceIdentities"></a>

```java
public java.lang.Object getManagedServiceIdentities();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentities">ElastigroupAzureManagedServiceIdentities</a>>

managed_service_identities block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#managed_service_identities ElastigroupAzure#managed_service_identities}

---

##### `maxSize`<sup>Optional</sup> <a name="maxSize" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.maxSize"></a>

```java
public java.lang.Number getMaxSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#max_size ElastigroupAzure#max_size}.

---

##### `minSize`<sup>Optional</sup> <a name="minSize" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.minSize"></a>

```java
public java.lang.Number getMinSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#min_size ElastigroupAzure#min_size}.

---

##### `scalingDownPolicy`<sup>Optional</sup> <a name="scalingDownPolicy" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.scalingDownPolicy"></a>

```java
public java.lang.Object getScalingDownPolicy();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicy">ElastigroupAzureScalingDownPolicy</a>>

scaling_down_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#scaling_down_policy ElastigroupAzure#scaling_down_policy}

---

##### `scalingUpPolicy`<sup>Optional</sup> <a name="scalingUpPolicy" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.scalingUpPolicy"></a>

```java
public java.lang.Object getScalingUpPolicy();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicy">ElastigroupAzureScalingUpPolicy</a>>

scaling_up_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#scaling_up_policy ElastigroupAzure#scaling_up_policy}

---

##### `scheduledTask`<sup>Optional</sup> <a name="scheduledTask" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.scheduledTask"></a>

```java
public java.lang.Object getScheduledTask();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTask">ElastigroupAzureScheduledTask</a>>

scheduled_task block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#scheduled_task ElastigroupAzure#scheduled_task}

---

##### `shutdownScript`<sup>Optional</sup> <a name="shutdownScript" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.shutdownScript"></a>

```java
public java.lang.String getShutdownScript();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#shutdown_script ElastigroupAzure#shutdown_script}.

---

##### `updatePolicy`<sup>Optional</sup> <a name="updatePolicy" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.updatePolicy"></a>

```java
public ElastigroupAzureUpdatePolicy getUpdatePolicy();
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicy">ElastigroupAzureUpdatePolicy</a>

update_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#update_policy ElastigroupAzure#update_policy}

---

##### `userData`<sup>Optional</sup> <a name="userData" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.userData"></a>

```java
public java.lang.String getUserData();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#user_data ElastigroupAzure#user_data}.

---

### ElastigroupAzureHealthCheck <a name="ElastigroupAzureHealthCheck" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheck.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_azure.ElastigroupAzureHealthCheck;

ElastigroupAzureHealthCheck.builder()
    .healthCheckType(java.lang.String)
//  .autoHealing(java.lang.Boolean)
//  .autoHealing(IResolvable)
//  .gracePeriod(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheck.property.healthCheckType">healthCheckType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#health_check_type ElastigroupAzure#health_check_type}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheck.property.autoHealing">autoHealing</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#auto_healing ElastigroupAzure#auto_healing}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheck.property.gracePeriod">gracePeriod</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#grace_period ElastigroupAzure#grace_period}. |

---

##### `healthCheckType`<sup>Required</sup> <a name="healthCheckType" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheck.property.healthCheckType"></a>

```java
public java.lang.String getHealthCheckType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#health_check_type ElastigroupAzure#health_check_type}.

---

##### `autoHealing`<sup>Optional</sup> <a name="autoHealing" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheck.property.autoHealing"></a>

```java
public java.lang.Object getAutoHealing();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#auto_healing ElastigroupAzure#auto_healing}.

---

##### `gracePeriod`<sup>Optional</sup> <a name="gracePeriod" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheck.property.gracePeriod"></a>

```java
public java.lang.Number getGracePeriod();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#grace_period ElastigroupAzure#grace_period}.

---

### ElastigroupAzureImage <a name="ElastigroupAzureImage" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImage.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_azure.ElastigroupAzureImage;

ElastigroupAzureImage.builder()
//  .custom(IResolvable)
//  .custom(java.util.List<ElastigroupAzureImageCustom>)
//  .marketplace(IResolvable)
//  .marketplace(java.util.List<ElastigroupAzureImageMarketplace>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImage.property.custom">custom</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustom">ElastigroupAzureImageCustom</a>></code> | custom block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImage.property.marketplace">marketplace</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplace">ElastigroupAzureImageMarketplace</a>></code> | marketplace block. |

---

##### `custom`<sup>Optional</sup> <a name="custom" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImage.property.custom"></a>

```java
public java.lang.Object getCustom();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustom">ElastigroupAzureImageCustom</a>>

custom block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#custom ElastigroupAzure#custom}

---

##### `marketplace`<sup>Optional</sup> <a name="marketplace" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImage.property.marketplace"></a>

```java
public java.lang.Object getMarketplace();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplace">ElastigroupAzureImageMarketplace</a>>

marketplace block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#marketplace ElastigroupAzure#marketplace}

---

### ElastigroupAzureImageCustom <a name="ElastigroupAzureImageCustom" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustom"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustom.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_azure.ElastigroupAzureImageCustom;

ElastigroupAzureImageCustom.builder()
    .imageName(java.lang.String)
    .resourceGroupName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustom.property.imageName">imageName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#image_name ElastigroupAzure#image_name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustom.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#resource_group_name ElastigroupAzure#resource_group_name}. |

---

##### `imageName`<sup>Required</sup> <a name="imageName" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustom.property.imageName"></a>

```java
public java.lang.String getImageName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#image_name ElastigroupAzure#image_name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustom.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#resource_group_name ElastigroupAzure#resource_group_name}.

---

### ElastigroupAzureImageMarketplace <a name="ElastigroupAzureImageMarketplace" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplace"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplace.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_azure.ElastigroupAzureImageMarketplace;

ElastigroupAzureImageMarketplace.builder()
    .offer(java.lang.String)
    .publisher(java.lang.String)
    .sku(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplace.property.offer">offer</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#offer ElastigroupAzure#offer}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplace.property.publisher">publisher</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#publisher ElastigroupAzure#publisher}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplace.property.sku">sku</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#sku ElastigroupAzure#sku}. |

---

##### `offer`<sup>Required</sup> <a name="offer" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplace.property.offer"></a>

```java
public java.lang.String getOffer();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#offer ElastigroupAzure#offer}.

---

##### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplace.property.publisher"></a>

```java
public java.lang.String getPublisher();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#publisher ElastigroupAzure#publisher}.

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplace.property.sku"></a>

```java
public java.lang.String getSku();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#sku ElastigroupAzure#sku}.

---

### ElastigroupAzureIntegrationKubernetes <a name="ElastigroupAzureIntegrationKubernetes" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetes.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_azure.ElastigroupAzureIntegrationKubernetes;

ElastigroupAzureIntegrationKubernetes.builder()
    .clusterIdentifier(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetes.property.clusterIdentifier">clusterIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#cluster_identifier ElastigroupAzure#cluster_identifier}. |

---

##### `clusterIdentifier`<sup>Required</sup> <a name="clusterIdentifier" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetes.property.clusterIdentifier"></a>

```java
public java.lang.String getClusterIdentifier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#cluster_identifier ElastigroupAzure#cluster_identifier}.

---

### ElastigroupAzureIntegrationMultaiRuntime <a name="ElastigroupAzureIntegrationMultaiRuntime" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntime.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_azure.ElastigroupAzureIntegrationMultaiRuntime;

ElastigroupAzureIntegrationMultaiRuntime.builder()
    .deploymentId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntime.property.deploymentId">deploymentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#deployment_id ElastigroupAzure#deployment_id}. |

---

##### `deploymentId`<sup>Required</sup> <a name="deploymentId" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntime.property.deploymentId"></a>

```java
public java.lang.String getDeploymentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#deployment_id ElastigroupAzure#deployment_id}.

---

### ElastigroupAzureLoadBalancers <a name="ElastigroupAzureLoadBalancers" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancers.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_azure.ElastigroupAzureLoadBalancers;

ElastigroupAzureLoadBalancers.builder()
    .type(java.lang.String)
//  .autoWeight(java.lang.Boolean)
//  .autoWeight(IResolvable)
//  .balancerId(java.lang.String)
//  .targetSetId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancers.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#type ElastigroupAzure#type}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancers.property.autoWeight">autoWeight</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#auto_weight ElastigroupAzure#auto_weight}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancers.property.balancerId">balancerId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#balancer_id ElastigroupAzure#balancer_id}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancers.property.targetSetId">targetSetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#target_set_id ElastigroupAzure#target_set_id}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancers.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#type ElastigroupAzure#type}.

---

##### `autoWeight`<sup>Optional</sup> <a name="autoWeight" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancers.property.autoWeight"></a>

```java
public java.lang.Object getAutoWeight();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#auto_weight ElastigroupAzure#auto_weight}.

---

##### `balancerId`<sup>Optional</sup> <a name="balancerId" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancers.property.balancerId"></a>

```java
public java.lang.String getBalancerId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#balancer_id ElastigroupAzure#balancer_id}.

---

##### `targetSetId`<sup>Optional</sup> <a name="targetSetId" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancers.property.targetSetId"></a>

```java
public java.lang.String getTargetSetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#target_set_id ElastigroupAzure#target_set_id}.

---

### ElastigroupAzureLogin <a name="ElastigroupAzureLogin" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLogin"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLogin.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_azure.ElastigroupAzureLogin;

ElastigroupAzureLogin.builder()
    .userName(java.lang.String)
//  .password(java.lang.String)
//  .sshPublicKey(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLogin.property.userName">userName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#user_name ElastigroupAzure#user_name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLogin.property.password">password</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#password ElastigroupAzure#password}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLogin.property.sshPublicKey">sshPublicKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#ssh_public_key ElastigroupAzure#ssh_public_key}. |

---

##### `userName`<sup>Required</sup> <a name="userName" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLogin.property.userName"></a>

```java
public java.lang.String getUserName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#user_name ElastigroupAzure#user_name}.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLogin.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#password ElastigroupAzure#password}.

---

##### `sshPublicKey`<sup>Optional</sup> <a name="sshPublicKey" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLogin.property.sshPublicKey"></a>

```java
public java.lang.String getSshPublicKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#ssh_public_key ElastigroupAzure#ssh_public_key}.

---

### ElastigroupAzureManagedServiceIdentities <a name="ElastigroupAzureManagedServiceIdentities" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentities"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentities.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_azure.ElastigroupAzureManagedServiceIdentities;

ElastigroupAzureManagedServiceIdentities.builder()
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentities.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#name ElastigroupAzure#name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentities.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#resource_group_name ElastigroupAzure#resource_group_name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentities.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#name ElastigroupAzure#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentities.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#resource_group_name ElastigroupAzure#resource_group_name}.

---

### ElastigroupAzureNetwork <a name="ElastigroupAzureNetwork" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetwork.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_azure.ElastigroupAzureNetwork;

ElastigroupAzureNetwork.builder()
    .resourceGroupName(java.lang.String)
    .subnetName(java.lang.String)
    .virtualNetworkName(java.lang.String)
//  .additionalIpConfigs(IResolvable)
//  .additionalIpConfigs(java.util.List<ElastigroupAzureNetworkAdditionalIpConfigs>)
//  .assignPublicIp(java.lang.Boolean)
//  .assignPublicIp(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetwork.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#resource_group_name ElastigroupAzure#resource_group_name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetwork.property.subnetName">subnetName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#subnet_name ElastigroupAzure#subnet_name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetwork.property.virtualNetworkName">virtualNetworkName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#virtual_network_name ElastigroupAzure#virtual_network_name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetwork.property.additionalIpConfigs">additionalIpConfigs</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigs">ElastigroupAzureNetworkAdditionalIpConfigs</a>></code> | additional_ip_configs block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetwork.property.assignPublicIp">assignPublicIp</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#assign_public_ip ElastigroupAzure#assign_public_ip}. |

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetwork.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#resource_group_name ElastigroupAzure#resource_group_name}.

---

##### `subnetName`<sup>Required</sup> <a name="subnetName" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetwork.property.subnetName"></a>

```java
public java.lang.String getSubnetName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#subnet_name ElastigroupAzure#subnet_name}.

---

##### `virtualNetworkName`<sup>Required</sup> <a name="virtualNetworkName" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetwork.property.virtualNetworkName"></a>

```java
public java.lang.String getVirtualNetworkName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#virtual_network_name ElastigroupAzure#virtual_network_name}.

---

##### `additionalIpConfigs`<sup>Optional</sup> <a name="additionalIpConfigs" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetwork.property.additionalIpConfigs"></a>

```java
public java.lang.Object getAdditionalIpConfigs();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigs">ElastigroupAzureNetworkAdditionalIpConfigs</a>>

additional_ip_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#additional_ip_configs ElastigroupAzure#additional_ip_configs}

---

##### `assignPublicIp`<sup>Optional</sup> <a name="assignPublicIp" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetwork.property.assignPublicIp"></a>

```java
public java.lang.Object getAssignPublicIp();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#assign_public_ip ElastigroupAzure#assign_public_ip}.

---

### ElastigroupAzureNetworkAdditionalIpConfigs <a name="ElastigroupAzureNetworkAdditionalIpConfigs" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigs.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_azure.ElastigroupAzureNetworkAdditionalIpConfigs;

ElastigroupAzureNetworkAdditionalIpConfigs.builder()
    .name(java.lang.String)
//  .privateIpVersion(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigs.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#name ElastigroupAzure#name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigs.property.privateIpVersion">privateIpVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#private_ip_version ElastigroupAzure#private_ip_version}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigs.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#name ElastigroupAzure#name}.

---

##### `privateIpVersion`<sup>Optional</sup> <a name="privateIpVersion" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigs.property.privateIpVersion"></a>

```java
public java.lang.String getPrivateIpVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#private_ip_version ElastigroupAzure#private_ip_version}.

---

### ElastigroupAzureScalingDownPolicy <a name="ElastigroupAzureScalingDownPolicy" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_azure.ElastigroupAzureScalingDownPolicy;

ElastigroupAzureScalingDownPolicy.builder()
    .metricName(java.lang.String)
    .namespace(java.lang.String)
    .policyName(java.lang.String)
    .threshold(java.lang.Number)
//  .actionType(java.lang.String)
//  .adjustment(java.lang.String)
//  .cooldown(java.lang.Number)
//  .dimensions(IResolvable)
//  .dimensions(java.util.List<ElastigroupAzureScalingDownPolicyDimensions>)
//  .evaluationPeriods(java.lang.Number)
//  .maximum(java.lang.String)
//  .maxTargetCapacity(java.lang.String)
//  .minimum(java.lang.String)
//  .minTargetCapacity(java.lang.String)
//  .operator(java.lang.String)
//  .period(java.lang.Number)
//  .statistic(java.lang.String)
//  .target(java.lang.String)
//  .unit(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicy.property.metricName">metricName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#metric_name ElastigroupAzure#metric_name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicy.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#namespace ElastigroupAzure#namespace}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicy.property.policyName">policyName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#policy_name ElastigroupAzure#policy_name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicy.property.threshold">threshold</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#threshold ElastigroupAzure#threshold}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicy.property.actionType">actionType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#action_type ElastigroupAzure#action_type}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicy.property.adjustment">adjustment</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#adjustment ElastigroupAzure#adjustment}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicy.property.cooldown">cooldown</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#cooldown ElastigroupAzure#cooldown}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicy.property.dimensions">dimensions</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensions">ElastigroupAzureScalingDownPolicyDimensions</a>></code> | dimensions block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicy.property.evaluationPeriods">evaluationPeriods</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#evaluation_periods ElastigroupAzure#evaluation_periods}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicy.property.maximum">maximum</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#maximum ElastigroupAzure#maximum}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicy.property.maxTargetCapacity">maxTargetCapacity</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#max_target_capacity ElastigroupAzure#max_target_capacity}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicy.property.minimum">minimum</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#minimum ElastigroupAzure#minimum}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicy.property.minTargetCapacity">minTargetCapacity</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#min_target_capacity ElastigroupAzure#min_target_capacity}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicy.property.operator">operator</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#operator ElastigroupAzure#operator}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicy.property.period">period</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#period ElastigroupAzure#period}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicy.property.statistic">statistic</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#statistic ElastigroupAzure#statistic}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicy.property.target">target</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#target ElastigroupAzure#target}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicy.property.unit">unit</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#unit ElastigroupAzure#unit}. |

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicy.property.metricName"></a>

```java
public java.lang.String getMetricName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#metric_name ElastigroupAzure#metric_name}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicy.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#namespace ElastigroupAzure#namespace}.

---

##### `policyName`<sup>Required</sup> <a name="policyName" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicy.property.policyName"></a>

```java
public java.lang.String getPolicyName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#policy_name ElastigroupAzure#policy_name}.

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicy.property.threshold"></a>

```java
public java.lang.Number getThreshold();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#threshold ElastigroupAzure#threshold}.

---

##### `actionType`<sup>Optional</sup> <a name="actionType" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicy.property.actionType"></a>

```java
public java.lang.String getActionType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#action_type ElastigroupAzure#action_type}.

---

##### `adjustment`<sup>Optional</sup> <a name="adjustment" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicy.property.adjustment"></a>

```java
public java.lang.String getAdjustment();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#adjustment ElastigroupAzure#adjustment}.

---

##### `cooldown`<sup>Optional</sup> <a name="cooldown" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicy.property.cooldown"></a>

```java
public java.lang.Number getCooldown();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#cooldown ElastigroupAzure#cooldown}.

---

##### `dimensions`<sup>Optional</sup> <a name="dimensions" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicy.property.dimensions"></a>

```java
public java.lang.Object getDimensions();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensions">ElastigroupAzureScalingDownPolicyDimensions</a>>

dimensions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#dimensions ElastigroupAzure#dimensions}

---

##### `evaluationPeriods`<sup>Optional</sup> <a name="evaluationPeriods" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicy.property.evaluationPeriods"></a>

```java
public java.lang.Number getEvaluationPeriods();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#evaluation_periods ElastigroupAzure#evaluation_periods}.

---

##### `maximum`<sup>Optional</sup> <a name="maximum" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicy.property.maximum"></a>

```java
public java.lang.String getMaximum();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#maximum ElastigroupAzure#maximum}.

---

##### `maxTargetCapacity`<sup>Optional</sup> <a name="maxTargetCapacity" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicy.property.maxTargetCapacity"></a>

```java
public java.lang.String getMaxTargetCapacity();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#max_target_capacity ElastigroupAzure#max_target_capacity}.

---

##### `minimum`<sup>Optional</sup> <a name="minimum" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicy.property.minimum"></a>

```java
public java.lang.String getMinimum();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#minimum ElastigroupAzure#minimum}.

---

##### `minTargetCapacity`<sup>Optional</sup> <a name="minTargetCapacity" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicy.property.minTargetCapacity"></a>

```java
public java.lang.String getMinTargetCapacity();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#min_target_capacity ElastigroupAzure#min_target_capacity}.

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicy.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#operator ElastigroupAzure#operator}.

---

##### `period`<sup>Optional</sup> <a name="period" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicy.property.period"></a>

```java
public java.lang.Number getPeriod();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#period ElastigroupAzure#period}.

---

##### `statistic`<sup>Optional</sup> <a name="statistic" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicy.property.statistic"></a>

```java
public java.lang.String getStatistic();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#statistic ElastigroupAzure#statistic}.

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicy.property.target"></a>

```java
public java.lang.String getTarget();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#target ElastigroupAzure#target}.

---

##### `unit`<sup>Optional</sup> <a name="unit" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicy.property.unit"></a>

```java
public java.lang.String getUnit();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#unit ElastigroupAzure#unit}.

---

### ElastigroupAzureScalingDownPolicyDimensions <a name="ElastigroupAzureScalingDownPolicyDimensions" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_azure.ElastigroupAzureScalingDownPolicyDimensions;

ElastigroupAzureScalingDownPolicyDimensions.builder()
    .name(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensions.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#name ElastigroupAzure#name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensions.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#value ElastigroupAzure#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensions.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#name ElastigroupAzure#name}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensions.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#value ElastigroupAzure#value}.

---

### ElastigroupAzureScalingUpPolicy <a name="ElastigroupAzureScalingUpPolicy" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_azure.ElastigroupAzureScalingUpPolicy;

ElastigroupAzureScalingUpPolicy.builder()
    .metricName(java.lang.String)
    .namespace(java.lang.String)
    .policyName(java.lang.String)
    .threshold(java.lang.Number)
//  .actionType(java.lang.String)
//  .adjustment(java.lang.String)
//  .cooldown(java.lang.Number)
//  .dimensions(IResolvable)
//  .dimensions(java.util.List<ElastigroupAzureScalingUpPolicyDimensions>)
//  .evaluationPeriods(java.lang.Number)
//  .maximum(java.lang.String)
//  .maxTargetCapacity(java.lang.String)
//  .minimum(java.lang.String)
//  .minTargetCapacity(java.lang.String)
//  .operator(java.lang.String)
//  .period(java.lang.Number)
//  .statistic(java.lang.String)
//  .target(java.lang.String)
//  .unit(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicy.property.metricName">metricName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#metric_name ElastigroupAzure#metric_name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicy.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#namespace ElastigroupAzure#namespace}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicy.property.policyName">policyName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#policy_name ElastigroupAzure#policy_name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicy.property.threshold">threshold</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#threshold ElastigroupAzure#threshold}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicy.property.actionType">actionType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#action_type ElastigroupAzure#action_type}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicy.property.adjustment">adjustment</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#adjustment ElastigroupAzure#adjustment}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicy.property.cooldown">cooldown</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#cooldown ElastigroupAzure#cooldown}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicy.property.dimensions">dimensions</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensions">ElastigroupAzureScalingUpPolicyDimensions</a>></code> | dimensions block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicy.property.evaluationPeriods">evaluationPeriods</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#evaluation_periods ElastigroupAzure#evaluation_periods}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicy.property.maximum">maximum</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#maximum ElastigroupAzure#maximum}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicy.property.maxTargetCapacity">maxTargetCapacity</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#max_target_capacity ElastigroupAzure#max_target_capacity}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicy.property.minimum">minimum</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#minimum ElastigroupAzure#minimum}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicy.property.minTargetCapacity">minTargetCapacity</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#min_target_capacity ElastigroupAzure#min_target_capacity}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicy.property.operator">operator</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#operator ElastigroupAzure#operator}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicy.property.period">period</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#period ElastigroupAzure#period}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicy.property.statistic">statistic</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#statistic ElastigroupAzure#statistic}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicy.property.target">target</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#target ElastigroupAzure#target}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicy.property.unit">unit</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#unit ElastigroupAzure#unit}. |

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicy.property.metricName"></a>

```java
public java.lang.String getMetricName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#metric_name ElastigroupAzure#metric_name}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicy.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#namespace ElastigroupAzure#namespace}.

---

##### `policyName`<sup>Required</sup> <a name="policyName" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicy.property.policyName"></a>

```java
public java.lang.String getPolicyName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#policy_name ElastigroupAzure#policy_name}.

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicy.property.threshold"></a>

```java
public java.lang.Number getThreshold();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#threshold ElastigroupAzure#threshold}.

---

##### `actionType`<sup>Optional</sup> <a name="actionType" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicy.property.actionType"></a>

```java
public java.lang.String getActionType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#action_type ElastigroupAzure#action_type}.

---

##### `adjustment`<sup>Optional</sup> <a name="adjustment" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicy.property.adjustment"></a>

```java
public java.lang.String getAdjustment();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#adjustment ElastigroupAzure#adjustment}.

---

##### `cooldown`<sup>Optional</sup> <a name="cooldown" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicy.property.cooldown"></a>

```java
public java.lang.Number getCooldown();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#cooldown ElastigroupAzure#cooldown}.

---

##### `dimensions`<sup>Optional</sup> <a name="dimensions" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicy.property.dimensions"></a>

```java
public java.lang.Object getDimensions();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensions">ElastigroupAzureScalingUpPolicyDimensions</a>>

dimensions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#dimensions ElastigroupAzure#dimensions}

---

##### `evaluationPeriods`<sup>Optional</sup> <a name="evaluationPeriods" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicy.property.evaluationPeriods"></a>

```java
public java.lang.Number getEvaluationPeriods();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#evaluation_periods ElastigroupAzure#evaluation_periods}.

---

##### `maximum`<sup>Optional</sup> <a name="maximum" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicy.property.maximum"></a>

```java
public java.lang.String getMaximum();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#maximum ElastigroupAzure#maximum}.

---

##### `maxTargetCapacity`<sup>Optional</sup> <a name="maxTargetCapacity" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicy.property.maxTargetCapacity"></a>

```java
public java.lang.String getMaxTargetCapacity();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#max_target_capacity ElastigroupAzure#max_target_capacity}.

---

##### `minimum`<sup>Optional</sup> <a name="minimum" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicy.property.minimum"></a>

```java
public java.lang.String getMinimum();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#minimum ElastigroupAzure#minimum}.

---

##### `minTargetCapacity`<sup>Optional</sup> <a name="minTargetCapacity" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicy.property.minTargetCapacity"></a>

```java
public java.lang.String getMinTargetCapacity();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#min_target_capacity ElastigroupAzure#min_target_capacity}.

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicy.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#operator ElastigroupAzure#operator}.

---

##### `period`<sup>Optional</sup> <a name="period" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicy.property.period"></a>

```java
public java.lang.Number getPeriod();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#period ElastigroupAzure#period}.

---

##### `statistic`<sup>Optional</sup> <a name="statistic" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicy.property.statistic"></a>

```java
public java.lang.String getStatistic();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#statistic ElastigroupAzure#statistic}.

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicy.property.target"></a>

```java
public java.lang.String getTarget();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#target ElastigroupAzure#target}.

---

##### `unit`<sup>Optional</sup> <a name="unit" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicy.property.unit"></a>

```java
public java.lang.String getUnit();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#unit ElastigroupAzure#unit}.

---

### ElastigroupAzureScalingUpPolicyDimensions <a name="ElastigroupAzureScalingUpPolicyDimensions" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_azure.ElastigroupAzureScalingUpPolicyDimensions;

ElastigroupAzureScalingUpPolicyDimensions.builder()
    .name(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensions.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#name ElastigroupAzure#name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensions.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#value ElastigroupAzure#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensions.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#name ElastigroupAzure#name}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensions.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#value ElastigroupAzure#value}.

---

### ElastigroupAzureScheduledTask <a name="ElastigroupAzureScheduledTask" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTask"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTask.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_azure.ElastigroupAzureScheduledTask;

ElastigroupAzureScheduledTask.builder()
    .cronExpression(java.lang.String)
    .taskType(java.lang.String)
//  .adjustment(java.lang.String)
//  .adjustmentPercentage(java.lang.String)
//  .batchSizePercentage(java.lang.String)
//  .gracePeriod(java.lang.String)
//  .isEnabled(java.lang.Boolean)
//  .isEnabled(IResolvable)
//  .scaleMaxCapacity(java.lang.String)
//  .scaleMinCapacity(java.lang.String)
//  .scaleTargetCapacity(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTask.property.cronExpression">cronExpression</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#cron_expression ElastigroupAzure#cron_expression}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTask.property.taskType">taskType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#task_type ElastigroupAzure#task_type}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTask.property.adjustment">adjustment</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#adjustment ElastigroupAzure#adjustment}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTask.property.adjustmentPercentage">adjustmentPercentage</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#adjustment_percentage ElastigroupAzure#adjustment_percentage}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTask.property.batchSizePercentage">batchSizePercentage</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#batch_size_percentage ElastigroupAzure#batch_size_percentage}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTask.property.gracePeriod">gracePeriod</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#grace_period ElastigroupAzure#grace_period}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTask.property.isEnabled">isEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#is_enabled ElastigroupAzure#is_enabled}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTask.property.scaleMaxCapacity">scaleMaxCapacity</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#scale_max_capacity ElastigroupAzure#scale_max_capacity}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTask.property.scaleMinCapacity">scaleMinCapacity</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#scale_min_capacity ElastigroupAzure#scale_min_capacity}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTask.property.scaleTargetCapacity">scaleTargetCapacity</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#scale_target_capacity ElastigroupAzure#scale_target_capacity}. |

---

##### `cronExpression`<sup>Required</sup> <a name="cronExpression" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTask.property.cronExpression"></a>

```java
public java.lang.String getCronExpression();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#cron_expression ElastigroupAzure#cron_expression}.

---

##### `taskType`<sup>Required</sup> <a name="taskType" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTask.property.taskType"></a>

```java
public java.lang.String getTaskType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#task_type ElastigroupAzure#task_type}.

---

##### `adjustment`<sup>Optional</sup> <a name="adjustment" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTask.property.adjustment"></a>

```java
public java.lang.String getAdjustment();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#adjustment ElastigroupAzure#adjustment}.

---

##### `adjustmentPercentage`<sup>Optional</sup> <a name="adjustmentPercentage" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTask.property.adjustmentPercentage"></a>

```java
public java.lang.String getAdjustmentPercentage();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#adjustment_percentage ElastigroupAzure#adjustment_percentage}.

---

##### `batchSizePercentage`<sup>Optional</sup> <a name="batchSizePercentage" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTask.property.batchSizePercentage"></a>

```java
public java.lang.String getBatchSizePercentage();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#batch_size_percentage ElastigroupAzure#batch_size_percentage}.

---

##### `gracePeriod`<sup>Optional</sup> <a name="gracePeriod" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTask.property.gracePeriod"></a>

```java
public java.lang.String getGracePeriod();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#grace_period ElastigroupAzure#grace_period}.

---

##### `isEnabled`<sup>Optional</sup> <a name="isEnabled" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTask.property.isEnabled"></a>

```java
public java.lang.Object getIsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#is_enabled ElastigroupAzure#is_enabled}.

---

##### `scaleMaxCapacity`<sup>Optional</sup> <a name="scaleMaxCapacity" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTask.property.scaleMaxCapacity"></a>

```java
public java.lang.String getScaleMaxCapacity();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#scale_max_capacity ElastigroupAzure#scale_max_capacity}.

---

##### `scaleMinCapacity`<sup>Optional</sup> <a name="scaleMinCapacity" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTask.property.scaleMinCapacity"></a>

```java
public java.lang.String getScaleMinCapacity();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#scale_min_capacity ElastigroupAzure#scale_min_capacity}.

---

##### `scaleTargetCapacity`<sup>Optional</sup> <a name="scaleTargetCapacity" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTask.property.scaleTargetCapacity"></a>

```java
public java.lang.String getScaleTargetCapacity();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#scale_target_capacity ElastigroupAzure#scale_target_capacity}.

---

### ElastigroupAzureStrategy <a name="ElastigroupAzureStrategy" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_azure.ElastigroupAzureStrategy;

ElastigroupAzureStrategy.builder()
//  .drainingTimeout(java.lang.Number)
//  .lowPriorityPercentage(java.lang.Number)
//  .odCount(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategy.property.drainingTimeout">drainingTimeout</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#draining_timeout ElastigroupAzure#draining_timeout}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategy.property.lowPriorityPercentage">lowPriorityPercentage</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#low_priority_percentage ElastigroupAzure#low_priority_percentage}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategy.property.odCount">odCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#od_count ElastigroupAzure#od_count}. |

---

##### `drainingTimeout`<sup>Optional</sup> <a name="drainingTimeout" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategy.property.drainingTimeout"></a>

```java
public java.lang.Number getDrainingTimeout();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#draining_timeout ElastigroupAzure#draining_timeout}.

---

##### `lowPriorityPercentage`<sup>Optional</sup> <a name="lowPriorityPercentage" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategy.property.lowPriorityPercentage"></a>

```java
public java.lang.Number getLowPriorityPercentage();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#low_priority_percentage ElastigroupAzure#low_priority_percentage}.

---

##### `odCount`<sup>Optional</sup> <a name="odCount" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategy.property.odCount"></a>

```java
public java.lang.Number getOdCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#od_count ElastigroupAzure#od_count}.

---

### ElastigroupAzureUpdatePolicy <a name="ElastigroupAzureUpdatePolicy" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_azure.ElastigroupAzureUpdatePolicy;

ElastigroupAzureUpdatePolicy.builder()
    .shouldRoll(java.lang.Boolean)
    .shouldRoll(IResolvable)
//  .rollConfig(ElastigroupAzureUpdatePolicyRollConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicy.property.shouldRoll">shouldRoll</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#should_roll ElastigroupAzure#should_roll}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicy.property.rollConfig">rollConfig</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfig">ElastigroupAzureUpdatePolicyRollConfig</a></code> | roll_config block. |

---

##### `shouldRoll`<sup>Required</sup> <a name="shouldRoll" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicy.property.shouldRoll"></a>

```java
public java.lang.Object getShouldRoll();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#should_roll ElastigroupAzure#should_roll}.

---

##### `rollConfig`<sup>Optional</sup> <a name="rollConfig" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicy.property.rollConfig"></a>

```java
public ElastigroupAzureUpdatePolicyRollConfig getRollConfig();
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfig">ElastigroupAzureUpdatePolicyRollConfig</a>

roll_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#roll_config ElastigroupAzure#roll_config}

---

### ElastigroupAzureUpdatePolicyRollConfig <a name="ElastigroupAzureUpdatePolicyRollConfig" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_azure.ElastigroupAzureUpdatePolicyRollConfig;

ElastigroupAzureUpdatePolicyRollConfig.builder()
    .batchSizePercentage(java.lang.Number)
//  .gracePeriod(java.lang.Number)
//  .healthCheckType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfig.property.batchSizePercentage">batchSizePercentage</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#batch_size_percentage ElastigroupAzure#batch_size_percentage}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfig.property.gracePeriod">gracePeriod</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#grace_period ElastigroupAzure#grace_period}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfig.property.healthCheckType">healthCheckType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#health_check_type ElastigroupAzure#health_check_type}. |

---

##### `batchSizePercentage`<sup>Required</sup> <a name="batchSizePercentage" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfig.property.batchSizePercentage"></a>

```java
public java.lang.Number getBatchSizePercentage();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#batch_size_percentage ElastigroupAzure#batch_size_percentage}.

---

##### `gracePeriod`<sup>Optional</sup> <a name="gracePeriod" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfig.property.gracePeriod"></a>

```java
public java.lang.Number getGracePeriod();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#grace_period ElastigroupAzure#grace_period}.

---

##### `healthCheckType`<sup>Optional</sup> <a name="healthCheckType" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfig.property.healthCheckType"></a>

```java
public java.lang.String getHealthCheckType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.162.0/docs/resources/elastigroup_azure#health_check_type ElastigroupAzure#health_check_type}.

---

## Classes <a name="Classes" id="Classes"></a>

### ElastigroupAzureHealthCheckOutputReference <a name="ElastigroupAzureHealthCheckOutputReference" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_azure.ElastigroupAzureHealthCheckOutputReference;

new ElastigroupAzureHealthCheckOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.resetAutoHealing">resetAutoHealing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.resetGracePeriod">resetGracePeriod</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAutoHealing` <a name="resetAutoHealing" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.resetAutoHealing"></a>

```java
public void resetAutoHealing()
```

##### `resetGracePeriod` <a name="resetGracePeriod" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.resetGracePeriod"></a>

```java
public void resetGracePeriod()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.property.autoHealingInput">autoHealingInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.property.gracePeriodInput">gracePeriodInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.property.healthCheckTypeInput">healthCheckTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.property.autoHealing">autoHealing</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.property.gracePeriod">gracePeriod</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.property.healthCheckType">healthCheckType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheck">ElastigroupAzureHealthCheck</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `autoHealingInput`<sup>Optional</sup> <a name="autoHealingInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.property.autoHealingInput"></a>

```java
public java.lang.Object getAutoHealingInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `gracePeriodInput`<sup>Optional</sup> <a name="gracePeriodInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.property.gracePeriodInput"></a>

```java
public java.lang.Number getGracePeriodInput();
```

- *Type:* java.lang.Number

---

##### `healthCheckTypeInput`<sup>Optional</sup> <a name="healthCheckTypeInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.property.healthCheckTypeInput"></a>

```java
public java.lang.String getHealthCheckTypeInput();
```

- *Type:* java.lang.String

---

##### `autoHealing`<sup>Required</sup> <a name="autoHealing" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.property.autoHealing"></a>

```java
public java.lang.Object getAutoHealing();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `gracePeriod`<sup>Required</sup> <a name="gracePeriod" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.property.gracePeriod"></a>

```java
public java.lang.Number getGracePeriod();
```

- *Type:* java.lang.Number

---

##### `healthCheckType`<sup>Required</sup> <a name="healthCheckType" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.property.healthCheckType"></a>

```java
public java.lang.String getHealthCheckType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.property.internalValue"></a>

```java
public ElastigroupAzureHealthCheck getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheck">ElastigroupAzureHealthCheck</a>

---


### ElastigroupAzureImageCustomList <a name="ElastigroupAzureImageCustomList" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_azure.ElastigroupAzureImageCustomList;

new ElastigroupAzureImageCustomList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomList.get"></a>

```java
public ElastigroupAzureImageCustomOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustom">ElastigroupAzureImageCustom</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustom">ElastigroupAzureImageCustom</a>>

---


### ElastigroupAzureImageCustomOutputReference <a name="ElastigroupAzureImageCustomOutputReference" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_azure.ElastigroupAzureImageCustomOutputReference;

new ElastigroupAzureImageCustomOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.property.imageNameInput">imageNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.property.imageName">imageName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustom">ElastigroupAzureImageCustom</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `imageNameInput`<sup>Optional</sup> <a name="imageNameInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.property.imageNameInput"></a>

```java
public java.lang.String getImageNameInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `imageName`<sup>Required</sup> <a name="imageName" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.property.imageName"></a>

```java
public java.lang.String getImageName();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustom">ElastigroupAzureImageCustom</a>

---


### ElastigroupAzureImageList <a name="ElastigroupAzureImageList" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_azure.ElastigroupAzureImageList;

new ElastigroupAzureImageList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageList.get"></a>

```java
public ElastigroupAzureImageOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImage">ElastigroupAzureImage</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImage">ElastigroupAzureImage</a>>

---


### ElastigroupAzureImageMarketplaceList <a name="ElastigroupAzureImageMarketplaceList" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_azure.ElastigroupAzureImageMarketplaceList;

new ElastigroupAzureImageMarketplaceList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceList.get"></a>

```java
public ElastigroupAzureImageMarketplaceOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplace">ElastigroupAzureImageMarketplace</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplace">ElastigroupAzureImageMarketplace</a>>

---


### ElastigroupAzureImageMarketplaceOutputReference <a name="ElastigroupAzureImageMarketplaceOutputReference" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_azure.ElastigroupAzureImageMarketplaceOutputReference;

new ElastigroupAzureImageMarketplaceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.property.offerInput">offerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.property.publisherInput">publisherInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.property.skuInput">skuInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.property.offer">offer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.property.publisher">publisher</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.property.sku">sku</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplace">ElastigroupAzureImageMarketplace</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `offerInput`<sup>Optional</sup> <a name="offerInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.property.offerInput"></a>

```java
public java.lang.String getOfferInput();
```

- *Type:* java.lang.String

---

##### `publisherInput`<sup>Optional</sup> <a name="publisherInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.property.publisherInput"></a>

```java
public java.lang.String getPublisherInput();
```

- *Type:* java.lang.String

---

##### `skuInput`<sup>Optional</sup> <a name="skuInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.property.skuInput"></a>

```java
public java.lang.String getSkuInput();
```

- *Type:* java.lang.String

---

##### `offer`<sup>Required</sup> <a name="offer" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.property.offer"></a>

```java
public java.lang.String getOffer();
```

- *Type:* java.lang.String

---

##### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.property.publisher"></a>

```java
public java.lang.String getPublisher();
```

- *Type:* java.lang.String

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.property.sku"></a>

```java
public java.lang.String getSku();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplace">ElastigroupAzureImageMarketplace</a>

---


### ElastigroupAzureImageOutputReference <a name="ElastigroupAzureImageOutputReference" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_azure.ElastigroupAzureImageOutputReference;

new ElastigroupAzureImageOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.putCustom">putCustom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.putMarketplace">putMarketplace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.resetCustom">resetCustom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.resetMarketplace">resetMarketplace</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustom` <a name="putCustom" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.putCustom"></a>

```java
public void putCustom(IResolvable OR java.util.List<ElastigroupAzureImageCustom> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.putCustom.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustom">ElastigroupAzureImageCustom</a>>

---

##### `putMarketplace` <a name="putMarketplace" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.putMarketplace"></a>

```java
public void putMarketplace(IResolvable OR java.util.List<ElastigroupAzureImageMarketplace> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.putMarketplace.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplace">ElastigroupAzureImageMarketplace</a>>

---

##### `resetCustom` <a name="resetCustom" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.resetCustom"></a>

```java
public void resetCustom()
```

##### `resetMarketplace` <a name="resetMarketplace" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.resetMarketplace"></a>

```java
public void resetMarketplace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.property.custom">custom</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomList">ElastigroupAzureImageCustomList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.property.marketplace">marketplace</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceList">ElastigroupAzureImageMarketplaceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.property.customInput">customInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustom">ElastigroupAzureImageCustom</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.property.marketplaceInput">marketplaceInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplace">ElastigroupAzureImageMarketplace</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImage">ElastigroupAzureImage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `custom`<sup>Required</sup> <a name="custom" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.property.custom"></a>

```java
public ElastigroupAzureImageCustomList getCustom();
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomList">ElastigroupAzureImageCustomList</a>

---

##### `marketplace`<sup>Required</sup> <a name="marketplace" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.property.marketplace"></a>

```java
public ElastigroupAzureImageMarketplaceList getMarketplace();
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceList">ElastigroupAzureImageMarketplaceList</a>

---

##### `customInput`<sup>Optional</sup> <a name="customInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.property.customInput"></a>

```java
public java.lang.Object getCustomInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustom">ElastigroupAzureImageCustom</a>>

---

##### `marketplaceInput`<sup>Optional</sup> <a name="marketplaceInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.property.marketplaceInput"></a>

```java
public java.lang.Object getMarketplaceInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplace">ElastigroupAzureImageMarketplace</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImage">ElastigroupAzureImage</a>

---


### ElastigroupAzureIntegrationKubernetesOutputReference <a name="ElastigroupAzureIntegrationKubernetesOutputReference" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_azure.ElastigroupAzureIntegrationKubernetesOutputReference;

new ElastigroupAzureIntegrationKubernetesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.property.clusterIdentifierInput">clusterIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.property.clusterIdentifier">clusterIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetes">ElastigroupAzureIntegrationKubernetes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clusterIdentifierInput`<sup>Optional</sup> <a name="clusterIdentifierInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.property.clusterIdentifierInput"></a>

```java
public java.lang.String getClusterIdentifierInput();
```

- *Type:* java.lang.String

---

##### `clusterIdentifier`<sup>Required</sup> <a name="clusterIdentifier" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.property.clusterIdentifier"></a>

```java
public java.lang.String getClusterIdentifier();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.property.internalValue"></a>

```java
public ElastigroupAzureIntegrationKubernetes getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetes">ElastigroupAzureIntegrationKubernetes</a>

---


### ElastigroupAzureIntegrationMultaiRuntimeOutputReference <a name="ElastigroupAzureIntegrationMultaiRuntimeOutputReference" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_azure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference;

new ElastigroupAzureIntegrationMultaiRuntimeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.property.deploymentIdInput">deploymentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.property.deploymentId">deploymentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntime">ElastigroupAzureIntegrationMultaiRuntime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `deploymentIdInput`<sup>Optional</sup> <a name="deploymentIdInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.property.deploymentIdInput"></a>

```java
public java.lang.String getDeploymentIdInput();
```

- *Type:* java.lang.String

---

##### `deploymentId`<sup>Required</sup> <a name="deploymentId" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.property.deploymentId"></a>

```java
public java.lang.String getDeploymentId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.property.internalValue"></a>

```java
public ElastigroupAzureIntegrationMultaiRuntime getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntime">ElastigroupAzureIntegrationMultaiRuntime</a>

---


### ElastigroupAzureLoadBalancersList <a name="ElastigroupAzureLoadBalancersList" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_azure.ElastigroupAzureLoadBalancersList;

new ElastigroupAzureLoadBalancersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersList.get"></a>

```java
public ElastigroupAzureLoadBalancersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancers">ElastigroupAzureLoadBalancers</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancers">ElastigroupAzureLoadBalancers</a>>

---


### ElastigroupAzureLoadBalancersOutputReference <a name="ElastigroupAzureLoadBalancersOutputReference" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_azure.ElastigroupAzureLoadBalancersOutputReference;

new ElastigroupAzureLoadBalancersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.resetAutoWeight">resetAutoWeight</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.resetBalancerId">resetBalancerId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.resetTargetSetId">resetTargetSetId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAutoWeight` <a name="resetAutoWeight" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.resetAutoWeight"></a>

```java
public void resetAutoWeight()
```

##### `resetBalancerId` <a name="resetBalancerId" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.resetBalancerId"></a>

```java
public void resetBalancerId()
```

##### `resetTargetSetId` <a name="resetTargetSetId" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.resetTargetSetId"></a>

```java
public void resetTargetSetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.property.autoWeightInput">autoWeightInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.property.balancerIdInput">balancerIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.property.targetSetIdInput">targetSetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.property.autoWeight">autoWeight</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.property.balancerId">balancerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.property.targetSetId">targetSetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancers">ElastigroupAzureLoadBalancers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `autoWeightInput`<sup>Optional</sup> <a name="autoWeightInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.property.autoWeightInput"></a>

```java
public java.lang.Object getAutoWeightInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `balancerIdInput`<sup>Optional</sup> <a name="balancerIdInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.property.balancerIdInput"></a>

```java
public java.lang.String getBalancerIdInput();
```

- *Type:* java.lang.String

---

##### `targetSetIdInput`<sup>Optional</sup> <a name="targetSetIdInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.property.targetSetIdInput"></a>

```java
public java.lang.String getTargetSetIdInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `autoWeight`<sup>Required</sup> <a name="autoWeight" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.property.autoWeight"></a>

```java
public java.lang.Object getAutoWeight();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `balancerId`<sup>Required</sup> <a name="balancerId" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.property.balancerId"></a>

```java
public java.lang.String getBalancerId();
```

- *Type:* java.lang.String

---

##### `targetSetId`<sup>Required</sup> <a name="targetSetId" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.property.targetSetId"></a>

```java
public java.lang.String getTargetSetId();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancers">ElastigroupAzureLoadBalancers</a>

---


### ElastigroupAzureLoginOutputReference <a name="ElastigroupAzureLoginOutputReference" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_azure.ElastigroupAzureLoginOutputReference;

new ElastigroupAzureLoginOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.resetSshPublicKey">resetSshPublicKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.resetPassword"></a>

```java
public void resetPassword()
```

##### `resetSshPublicKey` <a name="resetSshPublicKey" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.resetSshPublicKey"></a>

```java
public void resetSshPublicKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.property.sshPublicKeyInput">sshPublicKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.property.userNameInput">userNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.property.sshPublicKey">sshPublicKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.property.userName">userName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLogin">ElastigroupAzureLogin</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `sshPublicKeyInput`<sup>Optional</sup> <a name="sshPublicKeyInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.property.sshPublicKeyInput"></a>

```java
public java.lang.String getSshPublicKeyInput();
```

- *Type:* java.lang.String

---

##### `userNameInput`<sup>Optional</sup> <a name="userNameInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.property.userNameInput"></a>

```java
public java.lang.String getUserNameInput();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `sshPublicKey`<sup>Required</sup> <a name="sshPublicKey" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.property.sshPublicKey"></a>

```java
public java.lang.String getSshPublicKey();
```

- *Type:* java.lang.String

---

##### `userName`<sup>Required</sup> <a name="userName" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.property.userName"></a>

```java
public java.lang.String getUserName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.property.internalValue"></a>

```java
public ElastigroupAzureLogin getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLogin">ElastigroupAzureLogin</a>

---


### ElastigroupAzureManagedServiceIdentitiesList <a name="ElastigroupAzureManagedServiceIdentitiesList" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_azure.ElastigroupAzureManagedServiceIdentitiesList;

new ElastigroupAzureManagedServiceIdentitiesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesList.get"></a>

```java
public ElastigroupAzureManagedServiceIdentitiesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentities">ElastigroupAzureManagedServiceIdentities</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentities">ElastigroupAzureManagedServiceIdentities</a>>

---


### ElastigroupAzureManagedServiceIdentitiesOutputReference <a name="ElastigroupAzureManagedServiceIdentitiesOutputReference" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_azure.ElastigroupAzureManagedServiceIdentitiesOutputReference;

new ElastigroupAzureManagedServiceIdentitiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentities">ElastigroupAzureManagedServiceIdentities</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentities">ElastigroupAzureManagedServiceIdentities</a>

---


### ElastigroupAzureNetworkAdditionalIpConfigsList <a name="ElastigroupAzureNetworkAdditionalIpConfigsList" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_azure.ElastigroupAzureNetworkAdditionalIpConfigsList;

new ElastigroupAzureNetworkAdditionalIpConfigsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsList.get"></a>

```java
public ElastigroupAzureNetworkAdditionalIpConfigsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigs">ElastigroupAzureNetworkAdditionalIpConfigs</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigs">ElastigroupAzureNetworkAdditionalIpConfigs</a>>

---


### ElastigroupAzureNetworkAdditionalIpConfigsOutputReference <a name="ElastigroupAzureNetworkAdditionalIpConfigsOutputReference" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_azure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference;

new ElastigroupAzureNetworkAdditionalIpConfigsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.resetPrivateIpVersion">resetPrivateIpVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPrivateIpVersion` <a name="resetPrivateIpVersion" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.resetPrivateIpVersion"></a>

```java
public void resetPrivateIpVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.property.privateIpVersionInput">privateIpVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.property.privateIpVersion">privateIpVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigs">ElastigroupAzureNetworkAdditionalIpConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `privateIpVersionInput`<sup>Optional</sup> <a name="privateIpVersionInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.property.privateIpVersionInput"></a>

```java
public java.lang.String getPrivateIpVersionInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `privateIpVersion`<sup>Required</sup> <a name="privateIpVersion" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.property.privateIpVersion"></a>

```java
public java.lang.String getPrivateIpVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigs">ElastigroupAzureNetworkAdditionalIpConfigs</a>

---


### ElastigroupAzureNetworkOutputReference <a name="ElastigroupAzureNetworkOutputReference" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_azure.ElastigroupAzureNetworkOutputReference;

new ElastigroupAzureNetworkOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.putAdditionalIpConfigs">putAdditionalIpConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.resetAdditionalIpConfigs">resetAdditionalIpConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.resetAssignPublicIp">resetAssignPublicIp</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAdditionalIpConfigs` <a name="putAdditionalIpConfigs" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.putAdditionalIpConfigs"></a>

```java
public void putAdditionalIpConfigs(IResolvable OR java.util.List<ElastigroupAzureNetworkAdditionalIpConfigs> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.putAdditionalIpConfigs.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigs">ElastigroupAzureNetworkAdditionalIpConfigs</a>>

---

##### `resetAdditionalIpConfigs` <a name="resetAdditionalIpConfigs" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.resetAdditionalIpConfigs"></a>

```java
public void resetAdditionalIpConfigs()
```

##### `resetAssignPublicIp` <a name="resetAssignPublicIp" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.resetAssignPublicIp"></a>

```java
public void resetAssignPublicIp()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.property.additionalIpConfigs">additionalIpConfigs</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsList">ElastigroupAzureNetworkAdditionalIpConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.property.additionalIpConfigsInput">additionalIpConfigsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigs">ElastigroupAzureNetworkAdditionalIpConfigs</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.property.assignPublicIpInput">assignPublicIpInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.property.subnetNameInput">subnetNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.property.virtualNetworkNameInput">virtualNetworkNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.property.assignPublicIp">assignPublicIp</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.property.subnetName">subnetName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.property.virtualNetworkName">virtualNetworkName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetwork">ElastigroupAzureNetwork</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `additionalIpConfigs`<sup>Required</sup> <a name="additionalIpConfigs" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.property.additionalIpConfigs"></a>

```java
public ElastigroupAzureNetworkAdditionalIpConfigsList getAdditionalIpConfigs();
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsList">ElastigroupAzureNetworkAdditionalIpConfigsList</a>

---

##### `additionalIpConfigsInput`<sup>Optional</sup> <a name="additionalIpConfigsInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.property.additionalIpConfigsInput"></a>

```java
public java.lang.Object getAdditionalIpConfigsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigs">ElastigroupAzureNetworkAdditionalIpConfigs</a>>

---

##### `assignPublicIpInput`<sup>Optional</sup> <a name="assignPublicIpInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.property.assignPublicIpInput"></a>

```java
public java.lang.Object getAssignPublicIpInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `subnetNameInput`<sup>Optional</sup> <a name="subnetNameInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.property.subnetNameInput"></a>

```java
public java.lang.String getSubnetNameInput();
```

- *Type:* java.lang.String

---

##### `virtualNetworkNameInput`<sup>Optional</sup> <a name="virtualNetworkNameInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.property.virtualNetworkNameInput"></a>

```java
public java.lang.String getVirtualNetworkNameInput();
```

- *Type:* java.lang.String

---

##### `assignPublicIp`<sup>Required</sup> <a name="assignPublicIp" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.property.assignPublicIp"></a>

```java
public java.lang.Object getAssignPublicIp();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `subnetName`<sup>Required</sup> <a name="subnetName" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.property.subnetName"></a>

```java
public java.lang.String getSubnetName();
```

- *Type:* java.lang.String

---

##### `virtualNetworkName`<sup>Required</sup> <a name="virtualNetworkName" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.property.virtualNetworkName"></a>

```java
public java.lang.String getVirtualNetworkName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.property.internalValue"></a>

```java
public ElastigroupAzureNetwork getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetwork">ElastigroupAzureNetwork</a>

---


### ElastigroupAzureScalingDownPolicyDimensionsList <a name="ElastigroupAzureScalingDownPolicyDimensionsList" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_azure.ElastigroupAzureScalingDownPolicyDimensionsList;

new ElastigroupAzureScalingDownPolicyDimensionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsList.get"></a>

```java
public ElastigroupAzureScalingDownPolicyDimensionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensions">ElastigroupAzureScalingDownPolicyDimensions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensions">ElastigroupAzureScalingDownPolicyDimensions</a>>

---


### ElastigroupAzureScalingDownPolicyDimensionsOutputReference <a name="ElastigroupAzureScalingDownPolicyDimensionsOutputReference" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_azure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference;

new ElastigroupAzureScalingDownPolicyDimensionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensions">ElastigroupAzureScalingDownPolicyDimensions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensions">ElastigroupAzureScalingDownPolicyDimensions</a>

---


### ElastigroupAzureScalingDownPolicyList <a name="ElastigroupAzureScalingDownPolicyList" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_azure.ElastigroupAzureScalingDownPolicyList;

new ElastigroupAzureScalingDownPolicyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyList.get"></a>

```java
public ElastigroupAzureScalingDownPolicyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicy">ElastigroupAzureScalingDownPolicy</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicy">ElastigroupAzureScalingDownPolicy</a>>

---


### ElastigroupAzureScalingDownPolicyOutputReference <a name="ElastigroupAzureScalingDownPolicyOutputReference" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_azure.ElastigroupAzureScalingDownPolicyOutputReference;

new ElastigroupAzureScalingDownPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.putDimensions">putDimensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.resetActionType">resetActionType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.resetAdjustment">resetAdjustment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.resetCooldown">resetCooldown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.resetDimensions">resetDimensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.resetEvaluationPeriods">resetEvaluationPeriods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.resetMaximum">resetMaximum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.resetMaxTargetCapacity">resetMaxTargetCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.resetMinimum">resetMinimum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.resetMinTargetCapacity">resetMinTargetCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.resetOperator">resetOperator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.resetPeriod">resetPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.resetStatistic">resetStatistic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.resetTarget">resetTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.resetUnit">resetUnit</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDimensions` <a name="putDimensions" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.putDimensions"></a>

```java
public void putDimensions(IResolvable OR java.util.List<ElastigroupAzureScalingDownPolicyDimensions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.putDimensions.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensions">ElastigroupAzureScalingDownPolicyDimensions</a>>

---

##### `resetActionType` <a name="resetActionType" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.resetActionType"></a>

```java
public void resetActionType()
```

##### `resetAdjustment` <a name="resetAdjustment" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.resetAdjustment"></a>

```java
public void resetAdjustment()
```

##### `resetCooldown` <a name="resetCooldown" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.resetCooldown"></a>

```java
public void resetCooldown()
```

##### `resetDimensions` <a name="resetDimensions" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.resetDimensions"></a>

```java
public void resetDimensions()
```

##### `resetEvaluationPeriods` <a name="resetEvaluationPeriods" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.resetEvaluationPeriods"></a>

```java
public void resetEvaluationPeriods()
```

##### `resetMaximum` <a name="resetMaximum" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.resetMaximum"></a>

```java
public void resetMaximum()
```

##### `resetMaxTargetCapacity` <a name="resetMaxTargetCapacity" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.resetMaxTargetCapacity"></a>

```java
public void resetMaxTargetCapacity()
```

##### `resetMinimum` <a name="resetMinimum" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.resetMinimum"></a>

```java
public void resetMinimum()
```

##### `resetMinTargetCapacity` <a name="resetMinTargetCapacity" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.resetMinTargetCapacity"></a>

```java
public void resetMinTargetCapacity()
```

##### `resetOperator` <a name="resetOperator" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.resetOperator"></a>

```java
public void resetOperator()
```

##### `resetPeriod` <a name="resetPeriod" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.resetPeriod"></a>

```java
public void resetPeriod()
```

##### `resetStatistic` <a name="resetStatistic" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.resetStatistic"></a>

```java
public void resetStatistic()
```

##### `resetTarget` <a name="resetTarget" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.resetTarget"></a>

```java
public void resetTarget()
```

##### `resetUnit` <a name="resetUnit" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.resetUnit"></a>

```java
public void resetUnit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.dimensions">dimensions</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsList">ElastigroupAzureScalingDownPolicyDimensionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.actionTypeInput">actionTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.adjustmentInput">adjustmentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.cooldownInput">cooldownInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.dimensionsInput">dimensionsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensions">ElastigroupAzureScalingDownPolicyDimensions</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.evaluationPeriodsInput">evaluationPeriodsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.maximumInput">maximumInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.maxTargetCapacityInput">maxTargetCapacityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.metricNameInput">metricNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.minimumInput">minimumInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.minTargetCapacityInput">minTargetCapacityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.operatorInput">operatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.periodInput">periodInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.policyNameInput">policyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.statisticInput">statisticInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.targetInput">targetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.thresholdInput">thresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.unitInput">unitInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.actionType">actionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.adjustment">adjustment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.cooldown">cooldown</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.evaluationPeriods">evaluationPeriods</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.maximum">maximum</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.maxTargetCapacity">maxTargetCapacity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.metricName">metricName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.minimum">minimum</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.minTargetCapacity">minTargetCapacity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.period">period</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.policyName">policyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.statistic">statistic</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.target">target</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.threshold">threshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.unit">unit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicy">ElastigroupAzureScalingDownPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.dimensions"></a>

```java
public ElastigroupAzureScalingDownPolicyDimensionsList getDimensions();
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsList">ElastigroupAzureScalingDownPolicyDimensionsList</a>

---

##### `actionTypeInput`<sup>Optional</sup> <a name="actionTypeInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.actionTypeInput"></a>

```java
public java.lang.String getActionTypeInput();
```

- *Type:* java.lang.String

---

##### `adjustmentInput`<sup>Optional</sup> <a name="adjustmentInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.adjustmentInput"></a>

```java
public java.lang.String getAdjustmentInput();
```

- *Type:* java.lang.String

---

##### `cooldownInput`<sup>Optional</sup> <a name="cooldownInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.cooldownInput"></a>

```java
public java.lang.Number getCooldownInput();
```

- *Type:* java.lang.Number

---

##### `dimensionsInput`<sup>Optional</sup> <a name="dimensionsInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.dimensionsInput"></a>

```java
public java.lang.Object getDimensionsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensions">ElastigroupAzureScalingDownPolicyDimensions</a>>

---

##### `evaluationPeriodsInput`<sup>Optional</sup> <a name="evaluationPeriodsInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.evaluationPeriodsInput"></a>

```java
public java.lang.Number getEvaluationPeriodsInput();
```

- *Type:* java.lang.Number

---

##### `maximumInput`<sup>Optional</sup> <a name="maximumInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.maximumInput"></a>

```java
public java.lang.String getMaximumInput();
```

- *Type:* java.lang.String

---

##### `maxTargetCapacityInput`<sup>Optional</sup> <a name="maxTargetCapacityInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.maxTargetCapacityInput"></a>

```java
public java.lang.String getMaxTargetCapacityInput();
```

- *Type:* java.lang.String

---

##### `metricNameInput`<sup>Optional</sup> <a name="metricNameInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.metricNameInput"></a>

```java
public java.lang.String getMetricNameInput();
```

- *Type:* java.lang.String

---

##### `minimumInput`<sup>Optional</sup> <a name="minimumInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.minimumInput"></a>

```java
public java.lang.String getMinimumInput();
```

- *Type:* java.lang.String

---

##### `minTargetCapacityInput`<sup>Optional</sup> <a name="minTargetCapacityInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.minTargetCapacityInput"></a>

```java
public java.lang.String getMinTargetCapacityInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.operatorInput"></a>

```java
public java.lang.String getOperatorInput();
```

- *Type:* java.lang.String

---

##### `periodInput`<sup>Optional</sup> <a name="periodInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.periodInput"></a>

```java
public java.lang.Number getPeriodInput();
```

- *Type:* java.lang.Number

---

##### `policyNameInput`<sup>Optional</sup> <a name="policyNameInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.policyNameInput"></a>

```java
public java.lang.String getPolicyNameInput();
```

- *Type:* java.lang.String

---

##### `statisticInput`<sup>Optional</sup> <a name="statisticInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.statisticInput"></a>

```java
public java.lang.String getStatisticInput();
```

- *Type:* java.lang.String

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.targetInput"></a>

```java
public java.lang.String getTargetInput();
```

- *Type:* java.lang.String

---

##### `thresholdInput`<sup>Optional</sup> <a name="thresholdInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.thresholdInput"></a>

```java
public java.lang.Number getThresholdInput();
```

- *Type:* java.lang.Number

---

##### `unitInput`<sup>Optional</sup> <a name="unitInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.unitInput"></a>

```java
public java.lang.String getUnitInput();
```

- *Type:* java.lang.String

---

##### `actionType`<sup>Required</sup> <a name="actionType" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.actionType"></a>

```java
public java.lang.String getActionType();
```

- *Type:* java.lang.String

---

##### `adjustment`<sup>Required</sup> <a name="adjustment" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.adjustment"></a>

```java
public java.lang.String getAdjustment();
```

- *Type:* java.lang.String

---

##### `cooldown`<sup>Required</sup> <a name="cooldown" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.cooldown"></a>

```java
public java.lang.Number getCooldown();
```

- *Type:* java.lang.Number

---

##### `evaluationPeriods`<sup>Required</sup> <a name="evaluationPeriods" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.evaluationPeriods"></a>

```java
public java.lang.Number getEvaluationPeriods();
```

- *Type:* java.lang.Number

---

##### `maximum`<sup>Required</sup> <a name="maximum" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.maximum"></a>

```java
public java.lang.String getMaximum();
```

- *Type:* java.lang.String

---

##### `maxTargetCapacity`<sup>Required</sup> <a name="maxTargetCapacity" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.maxTargetCapacity"></a>

```java
public java.lang.String getMaxTargetCapacity();
```

- *Type:* java.lang.String

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.metricName"></a>

```java
public java.lang.String getMetricName();
```

- *Type:* java.lang.String

---

##### `minimum`<sup>Required</sup> <a name="minimum" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.minimum"></a>

```java
public java.lang.String getMinimum();
```

- *Type:* java.lang.String

---

##### `minTargetCapacity`<sup>Required</sup> <a name="minTargetCapacity" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.minTargetCapacity"></a>

```java
public java.lang.String getMinTargetCapacity();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.period"></a>

```java
public java.lang.Number getPeriod();
```

- *Type:* java.lang.Number

---

##### `policyName`<sup>Required</sup> <a name="policyName" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.policyName"></a>

```java
public java.lang.String getPolicyName();
```

- *Type:* java.lang.String

---

##### `statistic`<sup>Required</sup> <a name="statistic" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.statistic"></a>

```java
public java.lang.String getStatistic();
```

- *Type:* java.lang.String

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.target"></a>

```java
public java.lang.String getTarget();
```

- *Type:* java.lang.String

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.threshold"></a>

```java
public java.lang.Number getThreshold();
```

- *Type:* java.lang.Number

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.unit"></a>

```java
public java.lang.String getUnit();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicy">ElastigroupAzureScalingDownPolicy</a>

---


### ElastigroupAzureScalingUpPolicyDimensionsList <a name="ElastigroupAzureScalingUpPolicyDimensionsList" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_azure.ElastigroupAzureScalingUpPolicyDimensionsList;

new ElastigroupAzureScalingUpPolicyDimensionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsList.get"></a>

```java
public ElastigroupAzureScalingUpPolicyDimensionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensions">ElastigroupAzureScalingUpPolicyDimensions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensions">ElastigroupAzureScalingUpPolicyDimensions</a>>

---


### ElastigroupAzureScalingUpPolicyDimensionsOutputReference <a name="ElastigroupAzureScalingUpPolicyDimensionsOutputReference" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_azure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference;

new ElastigroupAzureScalingUpPolicyDimensionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensions">ElastigroupAzureScalingUpPolicyDimensions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensions">ElastigroupAzureScalingUpPolicyDimensions</a>

---


### ElastigroupAzureScalingUpPolicyList <a name="ElastigroupAzureScalingUpPolicyList" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_azure.ElastigroupAzureScalingUpPolicyList;

new ElastigroupAzureScalingUpPolicyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyList.get"></a>

```java
public ElastigroupAzureScalingUpPolicyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicy">ElastigroupAzureScalingUpPolicy</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicy">ElastigroupAzureScalingUpPolicy</a>>

---


### ElastigroupAzureScalingUpPolicyOutputReference <a name="ElastigroupAzureScalingUpPolicyOutputReference" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_azure.ElastigroupAzureScalingUpPolicyOutputReference;

new ElastigroupAzureScalingUpPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.putDimensions">putDimensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.resetActionType">resetActionType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.resetAdjustment">resetAdjustment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.resetCooldown">resetCooldown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.resetDimensions">resetDimensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.resetEvaluationPeriods">resetEvaluationPeriods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.resetMaximum">resetMaximum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.resetMaxTargetCapacity">resetMaxTargetCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.resetMinimum">resetMinimum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.resetMinTargetCapacity">resetMinTargetCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.resetOperator">resetOperator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.resetPeriod">resetPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.resetStatistic">resetStatistic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.resetTarget">resetTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.resetUnit">resetUnit</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDimensions` <a name="putDimensions" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.putDimensions"></a>

```java
public void putDimensions(IResolvable OR java.util.List<ElastigroupAzureScalingUpPolicyDimensions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.putDimensions.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensions">ElastigroupAzureScalingUpPolicyDimensions</a>>

---

##### `resetActionType` <a name="resetActionType" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.resetActionType"></a>

```java
public void resetActionType()
```

##### `resetAdjustment` <a name="resetAdjustment" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.resetAdjustment"></a>

```java
public void resetAdjustment()
```

##### `resetCooldown` <a name="resetCooldown" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.resetCooldown"></a>

```java
public void resetCooldown()
```

##### `resetDimensions` <a name="resetDimensions" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.resetDimensions"></a>

```java
public void resetDimensions()
```

##### `resetEvaluationPeriods` <a name="resetEvaluationPeriods" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.resetEvaluationPeriods"></a>

```java
public void resetEvaluationPeriods()
```

##### `resetMaximum` <a name="resetMaximum" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.resetMaximum"></a>

```java
public void resetMaximum()
```

##### `resetMaxTargetCapacity` <a name="resetMaxTargetCapacity" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.resetMaxTargetCapacity"></a>

```java
public void resetMaxTargetCapacity()
```

##### `resetMinimum` <a name="resetMinimum" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.resetMinimum"></a>

```java
public void resetMinimum()
```

##### `resetMinTargetCapacity` <a name="resetMinTargetCapacity" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.resetMinTargetCapacity"></a>

```java
public void resetMinTargetCapacity()
```

##### `resetOperator` <a name="resetOperator" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.resetOperator"></a>

```java
public void resetOperator()
```

##### `resetPeriod` <a name="resetPeriod" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.resetPeriod"></a>

```java
public void resetPeriod()
```

##### `resetStatistic` <a name="resetStatistic" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.resetStatistic"></a>

```java
public void resetStatistic()
```

##### `resetTarget` <a name="resetTarget" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.resetTarget"></a>

```java
public void resetTarget()
```

##### `resetUnit` <a name="resetUnit" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.resetUnit"></a>

```java
public void resetUnit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.dimensions">dimensions</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsList">ElastigroupAzureScalingUpPolicyDimensionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.actionTypeInput">actionTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.adjustmentInput">adjustmentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.cooldownInput">cooldownInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.dimensionsInput">dimensionsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensions">ElastigroupAzureScalingUpPolicyDimensions</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.evaluationPeriodsInput">evaluationPeriodsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.maximumInput">maximumInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.maxTargetCapacityInput">maxTargetCapacityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.metricNameInput">metricNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.minimumInput">minimumInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.minTargetCapacityInput">minTargetCapacityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.operatorInput">operatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.periodInput">periodInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.policyNameInput">policyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.statisticInput">statisticInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.targetInput">targetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.thresholdInput">thresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.unitInput">unitInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.actionType">actionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.adjustment">adjustment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.cooldown">cooldown</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.evaluationPeriods">evaluationPeriods</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.maximum">maximum</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.maxTargetCapacity">maxTargetCapacity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.metricName">metricName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.minimum">minimum</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.minTargetCapacity">minTargetCapacity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.period">period</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.policyName">policyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.statistic">statistic</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.target">target</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.threshold">threshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.unit">unit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicy">ElastigroupAzureScalingUpPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.dimensions"></a>

```java
public ElastigroupAzureScalingUpPolicyDimensionsList getDimensions();
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsList">ElastigroupAzureScalingUpPolicyDimensionsList</a>

---

##### `actionTypeInput`<sup>Optional</sup> <a name="actionTypeInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.actionTypeInput"></a>

```java
public java.lang.String getActionTypeInput();
```

- *Type:* java.lang.String

---

##### `adjustmentInput`<sup>Optional</sup> <a name="adjustmentInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.adjustmentInput"></a>

```java
public java.lang.String getAdjustmentInput();
```

- *Type:* java.lang.String

---

##### `cooldownInput`<sup>Optional</sup> <a name="cooldownInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.cooldownInput"></a>

```java
public java.lang.Number getCooldownInput();
```

- *Type:* java.lang.Number

---

##### `dimensionsInput`<sup>Optional</sup> <a name="dimensionsInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.dimensionsInput"></a>

```java
public java.lang.Object getDimensionsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensions">ElastigroupAzureScalingUpPolicyDimensions</a>>

---

##### `evaluationPeriodsInput`<sup>Optional</sup> <a name="evaluationPeriodsInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.evaluationPeriodsInput"></a>

```java
public java.lang.Number getEvaluationPeriodsInput();
```

- *Type:* java.lang.Number

---

##### `maximumInput`<sup>Optional</sup> <a name="maximumInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.maximumInput"></a>

```java
public java.lang.String getMaximumInput();
```

- *Type:* java.lang.String

---

##### `maxTargetCapacityInput`<sup>Optional</sup> <a name="maxTargetCapacityInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.maxTargetCapacityInput"></a>

```java
public java.lang.String getMaxTargetCapacityInput();
```

- *Type:* java.lang.String

---

##### `metricNameInput`<sup>Optional</sup> <a name="metricNameInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.metricNameInput"></a>

```java
public java.lang.String getMetricNameInput();
```

- *Type:* java.lang.String

---

##### `minimumInput`<sup>Optional</sup> <a name="minimumInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.minimumInput"></a>

```java
public java.lang.String getMinimumInput();
```

- *Type:* java.lang.String

---

##### `minTargetCapacityInput`<sup>Optional</sup> <a name="minTargetCapacityInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.minTargetCapacityInput"></a>

```java
public java.lang.String getMinTargetCapacityInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.operatorInput"></a>

```java
public java.lang.String getOperatorInput();
```

- *Type:* java.lang.String

---

##### `periodInput`<sup>Optional</sup> <a name="periodInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.periodInput"></a>

```java
public java.lang.Number getPeriodInput();
```

- *Type:* java.lang.Number

---

##### `policyNameInput`<sup>Optional</sup> <a name="policyNameInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.policyNameInput"></a>

```java
public java.lang.String getPolicyNameInput();
```

- *Type:* java.lang.String

---

##### `statisticInput`<sup>Optional</sup> <a name="statisticInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.statisticInput"></a>

```java
public java.lang.String getStatisticInput();
```

- *Type:* java.lang.String

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.targetInput"></a>

```java
public java.lang.String getTargetInput();
```

- *Type:* java.lang.String

---

##### `thresholdInput`<sup>Optional</sup> <a name="thresholdInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.thresholdInput"></a>

```java
public java.lang.Number getThresholdInput();
```

- *Type:* java.lang.Number

---

##### `unitInput`<sup>Optional</sup> <a name="unitInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.unitInput"></a>

```java
public java.lang.String getUnitInput();
```

- *Type:* java.lang.String

---

##### `actionType`<sup>Required</sup> <a name="actionType" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.actionType"></a>

```java
public java.lang.String getActionType();
```

- *Type:* java.lang.String

---

##### `adjustment`<sup>Required</sup> <a name="adjustment" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.adjustment"></a>

```java
public java.lang.String getAdjustment();
```

- *Type:* java.lang.String

---

##### `cooldown`<sup>Required</sup> <a name="cooldown" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.cooldown"></a>

```java
public java.lang.Number getCooldown();
```

- *Type:* java.lang.Number

---

##### `evaluationPeriods`<sup>Required</sup> <a name="evaluationPeriods" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.evaluationPeriods"></a>

```java
public java.lang.Number getEvaluationPeriods();
```

- *Type:* java.lang.Number

---

##### `maximum`<sup>Required</sup> <a name="maximum" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.maximum"></a>

```java
public java.lang.String getMaximum();
```

- *Type:* java.lang.String

---

##### `maxTargetCapacity`<sup>Required</sup> <a name="maxTargetCapacity" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.maxTargetCapacity"></a>

```java
public java.lang.String getMaxTargetCapacity();
```

- *Type:* java.lang.String

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.metricName"></a>

```java
public java.lang.String getMetricName();
```

- *Type:* java.lang.String

---

##### `minimum`<sup>Required</sup> <a name="minimum" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.minimum"></a>

```java
public java.lang.String getMinimum();
```

- *Type:* java.lang.String

---

##### `minTargetCapacity`<sup>Required</sup> <a name="minTargetCapacity" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.minTargetCapacity"></a>

```java
public java.lang.String getMinTargetCapacity();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.period"></a>

```java
public java.lang.Number getPeriod();
```

- *Type:* java.lang.Number

---

##### `policyName`<sup>Required</sup> <a name="policyName" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.policyName"></a>

```java
public java.lang.String getPolicyName();
```

- *Type:* java.lang.String

---

##### `statistic`<sup>Required</sup> <a name="statistic" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.statistic"></a>

```java
public java.lang.String getStatistic();
```

- *Type:* java.lang.String

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.target"></a>

```java
public java.lang.String getTarget();
```

- *Type:* java.lang.String

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.threshold"></a>

```java
public java.lang.Number getThreshold();
```

- *Type:* java.lang.Number

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.unit"></a>

```java
public java.lang.String getUnit();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicy">ElastigroupAzureScalingUpPolicy</a>

---


### ElastigroupAzureScheduledTaskList <a name="ElastigroupAzureScheduledTaskList" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_azure.ElastigroupAzureScheduledTaskList;

new ElastigroupAzureScheduledTaskList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskList.get"></a>

```java
public ElastigroupAzureScheduledTaskOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTask">ElastigroupAzureScheduledTask</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTask">ElastigroupAzureScheduledTask</a>>

---


### ElastigroupAzureScheduledTaskOutputReference <a name="ElastigroupAzureScheduledTaskOutputReference" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_azure.ElastigroupAzureScheduledTaskOutputReference;

new ElastigroupAzureScheduledTaskOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.resetAdjustment">resetAdjustment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.resetAdjustmentPercentage">resetAdjustmentPercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.resetBatchSizePercentage">resetBatchSizePercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.resetGracePeriod">resetGracePeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.resetIsEnabled">resetIsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.resetScaleMaxCapacity">resetScaleMaxCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.resetScaleMinCapacity">resetScaleMinCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.resetScaleTargetCapacity">resetScaleTargetCapacity</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAdjustment` <a name="resetAdjustment" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.resetAdjustment"></a>

```java
public void resetAdjustment()
```

##### `resetAdjustmentPercentage` <a name="resetAdjustmentPercentage" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.resetAdjustmentPercentage"></a>

```java
public void resetAdjustmentPercentage()
```

##### `resetBatchSizePercentage` <a name="resetBatchSizePercentage" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.resetBatchSizePercentage"></a>

```java
public void resetBatchSizePercentage()
```

##### `resetGracePeriod` <a name="resetGracePeriod" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.resetGracePeriod"></a>

```java
public void resetGracePeriod()
```

##### `resetIsEnabled` <a name="resetIsEnabled" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.resetIsEnabled"></a>

```java
public void resetIsEnabled()
```

##### `resetScaleMaxCapacity` <a name="resetScaleMaxCapacity" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.resetScaleMaxCapacity"></a>

```java
public void resetScaleMaxCapacity()
```

##### `resetScaleMinCapacity` <a name="resetScaleMinCapacity" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.resetScaleMinCapacity"></a>

```java
public void resetScaleMinCapacity()
```

##### `resetScaleTargetCapacity` <a name="resetScaleTargetCapacity" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.resetScaleTargetCapacity"></a>

```java
public void resetScaleTargetCapacity()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.property.adjustmentInput">adjustmentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.property.adjustmentPercentageInput">adjustmentPercentageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.property.batchSizePercentageInput">batchSizePercentageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.property.cronExpressionInput">cronExpressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.property.gracePeriodInput">gracePeriodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.property.isEnabledInput">isEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.property.scaleMaxCapacityInput">scaleMaxCapacityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.property.scaleMinCapacityInput">scaleMinCapacityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.property.scaleTargetCapacityInput">scaleTargetCapacityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.property.taskTypeInput">taskTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.property.adjustment">adjustment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.property.adjustmentPercentage">adjustmentPercentage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.property.batchSizePercentage">batchSizePercentage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.property.cronExpression">cronExpression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.property.gracePeriod">gracePeriod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.property.isEnabled">isEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.property.scaleMaxCapacity">scaleMaxCapacity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.property.scaleMinCapacity">scaleMinCapacity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.property.scaleTargetCapacity">scaleTargetCapacity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.property.taskType">taskType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTask">ElastigroupAzureScheduledTask</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `adjustmentInput`<sup>Optional</sup> <a name="adjustmentInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.property.adjustmentInput"></a>

```java
public java.lang.String getAdjustmentInput();
```

- *Type:* java.lang.String

---

##### `adjustmentPercentageInput`<sup>Optional</sup> <a name="adjustmentPercentageInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.property.adjustmentPercentageInput"></a>

```java
public java.lang.String getAdjustmentPercentageInput();
```

- *Type:* java.lang.String

---

##### `batchSizePercentageInput`<sup>Optional</sup> <a name="batchSizePercentageInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.property.batchSizePercentageInput"></a>

```java
public java.lang.String getBatchSizePercentageInput();
```

- *Type:* java.lang.String

---

##### `cronExpressionInput`<sup>Optional</sup> <a name="cronExpressionInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.property.cronExpressionInput"></a>

```java
public java.lang.String getCronExpressionInput();
```

- *Type:* java.lang.String

---

##### `gracePeriodInput`<sup>Optional</sup> <a name="gracePeriodInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.property.gracePeriodInput"></a>

```java
public java.lang.String getGracePeriodInput();
```

- *Type:* java.lang.String

---

##### `isEnabledInput`<sup>Optional</sup> <a name="isEnabledInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.property.isEnabledInput"></a>

```java
public java.lang.Object getIsEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `scaleMaxCapacityInput`<sup>Optional</sup> <a name="scaleMaxCapacityInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.property.scaleMaxCapacityInput"></a>

```java
public java.lang.String getScaleMaxCapacityInput();
```

- *Type:* java.lang.String

---

##### `scaleMinCapacityInput`<sup>Optional</sup> <a name="scaleMinCapacityInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.property.scaleMinCapacityInput"></a>

```java
public java.lang.String getScaleMinCapacityInput();
```

- *Type:* java.lang.String

---

##### `scaleTargetCapacityInput`<sup>Optional</sup> <a name="scaleTargetCapacityInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.property.scaleTargetCapacityInput"></a>

```java
public java.lang.String getScaleTargetCapacityInput();
```

- *Type:* java.lang.String

---

##### `taskTypeInput`<sup>Optional</sup> <a name="taskTypeInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.property.taskTypeInput"></a>

```java
public java.lang.String getTaskTypeInput();
```

- *Type:* java.lang.String

---

##### `adjustment`<sup>Required</sup> <a name="adjustment" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.property.adjustment"></a>

```java
public java.lang.String getAdjustment();
```

- *Type:* java.lang.String

---

##### `adjustmentPercentage`<sup>Required</sup> <a name="adjustmentPercentage" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.property.adjustmentPercentage"></a>

```java
public java.lang.String getAdjustmentPercentage();
```

- *Type:* java.lang.String

---

##### `batchSizePercentage`<sup>Required</sup> <a name="batchSizePercentage" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.property.batchSizePercentage"></a>

```java
public java.lang.String getBatchSizePercentage();
```

- *Type:* java.lang.String

---

##### `cronExpression`<sup>Required</sup> <a name="cronExpression" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.property.cronExpression"></a>

```java
public java.lang.String getCronExpression();
```

- *Type:* java.lang.String

---

##### `gracePeriod`<sup>Required</sup> <a name="gracePeriod" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.property.gracePeriod"></a>

```java
public java.lang.String getGracePeriod();
```

- *Type:* java.lang.String

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.property.isEnabled"></a>

```java
public java.lang.Object getIsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `scaleMaxCapacity`<sup>Required</sup> <a name="scaleMaxCapacity" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.property.scaleMaxCapacity"></a>

```java
public java.lang.String getScaleMaxCapacity();
```

- *Type:* java.lang.String

---

##### `scaleMinCapacity`<sup>Required</sup> <a name="scaleMinCapacity" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.property.scaleMinCapacity"></a>

```java
public java.lang.String getScaleMinCapacity();
```

- *Type:* java.lang.String

---

##### `scaleTargetCapacity`<sup>Required</sup> <a name="scaleTargetCapacity" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.property.scaleTargetCapacity"></a>

```java
public java.lang.String getScaleTargetCapacity();
```

- *Type:* java.lang.String

---

##### `taskType`<sup>Required</sup> <a name="taskType" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.property.taskType"></a>

```java
public java.lang.String getTaskType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTask">ElastigroupAzureScheduledTask</a>

---


### ElastigroupAzureStrategyOutputReference <a name="ElastigroupAzureStrategyOutputReference" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_azure.ElastigroupAzureStrategyOutputReference;

new ElastigroupAzureStrategyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.resetDrainingTimeout">resetDrainingTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.resetLowPriorityPercentage">resetLowPriorityPercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.resetOdCount">resetOdCount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDrainingTimeout` <a name="resetDrainingTimeout" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.resetDrainingTimeout"></a>

```java
public void resetDrainingTimeout()
```

##### `resetLowPriorityPercentage` <a name="resetLowPriorityPercentage" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.resetLowPriorityPercentage"></a>

```java
public void resetLowPriorityPercentage()
```

##### `resetOdCount` <a name="resetOdCount" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.resetOdCount"></a>

```java
public void resetOdCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.property.drainingTimeoutInput">drainingTimeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.property.lowPriorityPercentageInput">lowPriorityPercentageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.property.odCountInput">odCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.property.drainingTimeout">drainingTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.property.lowPriorityPercentage">lowPriorityPercentage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.property.odCount">odCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategy">ElastigroupAzureStrategy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `drainingTimeoutInput`<sup>Optional</sup> <a name="drainingTimeoutInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.property.drainingTimeoutInput"></a>

```java
public java.lang.Number getDrainingTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `lowPriorityPercentageInput`<sup>Optional</sup> <a name="lowPriorityPercentageInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.property.lowPriorityPercentageInput"></a>

```java
public java.lang.Number getLowPriorityPercentageInput();
```

- *Type:* java.lang.Number

---

##### `odCountInput`<sup>Optional</sup> <a name="odCountInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.property.odCountInput"></a>

```java
public java.lang.Number getOdCountInput();
```

- *Type:* java.lang.Number

---

##### `drainingTimeout`<sup>Required</sup> <a name="drainingTimeout" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.property.drainingTimeout"></a>

```java
public java.lang.Number getDrainingTimeout();
```

- *Type:* java.lang.Number

---

##### `lowPriorityPercentage`<sup>Required</sup> <a name="lowPriorityPercentage" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.property.lowPriorityPercentage"></a>

```java
public java.lang.Number getLowPriorityPercentage();
```

- *Type:* java.lang.Number

---

##### `odCount`<sup>Required</sup> <a name="odCount" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.property.odCount"></a>

```java
public java.lang.Number getOdCount();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.property.internalValue"></a>

```java
public ElastigroupAzureStrategy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategy">ElastigroupAzureStrategy</a>

---


### ElastigroupAzureUpdatePolicyOutputReference <a name="ElastigroupAzureUpdatePolicyOutputReference" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_azure.ElastigroupAzureUpdatePolicyOutputReference;

new ElastigroupAzureUpdatePolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.putRollConfig">putRollConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.resetRollConfig">resetRollConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRollConfig` <a name="putRollConfig" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.putRollConfig"></a>

```java
public void putRollConfig(ElastigroupAzureUpdatePolicyRollConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.putRollConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfig">ElastigroupAzureUpdatePolicyRollConfig</a>

---

##### `resetRollConfig` <a name="resetRollConfig" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.resetRollConfig"></a>

```java
public void resetRollConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.property.rollConfig">rollConfig</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference">ElastigroupAzureUpdatePolicyRollConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.property.rollConfigInput">rollConfigInput</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfig">ElastigroupAzureUpdatePolicyRollConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.property.shouldRollInput">shouldRollInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.property.shouldRoll">shouldRoll</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicy">ElastigroupAzureUpdatePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `rollConfig`<sup>Required</sup> <a name="rollConfig" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.property.rollConfig"></a>

```java
public ElastigroupAzureUpdatePolicyRollConfigOutputReference getRollConfig();
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference">ElastigroupAzureUpdatePolicyRollConfigOutputReference</a>

---

##### `rollConfigInput`<sup>Optional</sup> <a name="rollConfigInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.property.rollConfigInput"></a>

```java
public ElastigroupAzureUpdatePolicyRollConfig getRollConfigInput();
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfig">ElastigroupAzureUpdatePolicyRollConfig</a>

---

##### `shouldRollInput`<sup>Optional</sup> <a name="shouldRollInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.property.shouldRollInput"></a>

```java
public java.lang.Object getShouldRollInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `shouldRoll`<sup>Required</sup> <a name="shouldRoll" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.property.shouldRoll"></a>

```java
public java.lang.Object getShouldRoll();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.property.internalValue"></a>

```java
public ElastigroupAzureUpdatePolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicy">ElastigroupAzureUpdatePolicy</a>

---


### ElastigroupAzureUpdatePolicyRollConfigOutputReference <a name="ElastigroupAzureUpdatePolicyRollConfigOutputReference" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_azure.ElastigroupAzureUpdatePolicyRollConfigOutputReference;

new ElastigroupAzureUpdatePolicyRollConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.resetGracePeriod">resetGracePeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.resetHealthCheckType">resetHealthCheckType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGracePeriod` <a name="resetGracePeriod" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.resetGracePeriod"></a>

```java
public void resetGracePeriod()
```

##### `resetHealthCheckType` <a name="resetHealthCheckType" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.resetHealthCheckType"></a>

```java
public void resetHealthCheckType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.property.batchSizePercentageInput">batchSizePercentageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.property.gracePeriodInput">gracePeriodInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.property.healthCheckTypeInput">healthCheckTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.property.batchSizePercentage">batchSizePercentage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.property.gracePeriod">gracePeriod</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.property.healthCheckType">healthCheckType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfig">ElastigroupAzureUpdatePolicyRollConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `batchSizePercentageInput`<sup>Optional</sup> <a name="batchSizePercentageInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.property.batchSizePercentageInput"></a>

```java
public java.lang.Number getBatchSizePercentageInput();
```

- *Type:* java.lang.Number

---

##### `gracePeriodInput`<sup>Optional</sup> <a name="gracePeriodInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.property.gracePeriodInput"></a>

```java
public java.lang.Number getGracePeriodInput();
```

- *Type:* java.lang.Number

---

##### `healthCheckTypeInput`<sup>Optional</sup> <a name="healthCheckTypeInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.property.healthCheckTypeInput"></a>

```java
public java.lang.String getHealthCheckTypeInput();
```

- *Type:* java.lang.String

---

##### `batchSizePercentage`<sup>Required</sup> <a name="batchSizePercentage" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.property.batchSizePercentage"></a>

```java
public java.lang.Number getBatchSizePercentage();
```

- *Type:* java.lang.Number

---

##### `gracePeriod`<sup>Required</sup> <a name="gracePeriod" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.property.gracePeriod"></a>

```java
public java.lang.Number getGracePeriod();
```

- *Type:* java.lang.Number

---

##### `healthCheckType`<sup>Required</sup> <a name="healthCheckType" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.property.healthCheckType"></a>

```java
public java.lang.String getHealthCheckType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.property.internalValue"></a>

```java
public ElastigroupAzureUpdatePolicyRollConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfig">ElastigroupAzureUpdatePolicyRollConfig</a>

---



